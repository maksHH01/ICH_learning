#!/bin/bash

address=$1
max_ping_time=100
max_failures=3

if [ -z "$address" ]; then
    echo "Usage: $0 <address>"
    exit 1
fi

count=0

while true; do
    output=$(LANG=C ping -c 1 "$address" 2>/dev/null)

    if [ $? -eq 0 ]; then
        count=0
         time=$(echo "$output" | grep -oP 'time=\K[0-9.]+' | head -n1 | cut -d. -f1)

        if [[ -n "$time" && "$time" -gt "$max_ping_time" ]]; then
            echo "Ping time is over $max_ping_time ms: $time ms"
        else
            echo "Ping OK: $time ms"
        fi
    else
        ((count++))
        echo "Ping failed ($count/$max_failures)"
        if (( count >= max_failures )); then
            echo "Ping to $address failed $max_failures times. Exiting."
            exit 1
        fi
    fi

    sleep 1
done
