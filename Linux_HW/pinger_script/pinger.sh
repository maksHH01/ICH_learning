	#!/bin/bash
#
address=$1
max_ping_time=100
max_failures=3

count=0

while true 
do
output=$(ping -c 1 $address 2>/dev/null)

    if [ $? -eq 0 ]; then
        count=0
        time=$(echo "$output" | grep 'time=' | sed 's/.*time=//' | cut -d. -f1)

        if [[ -n "$time" && "$time" -gt "$max_ping_time" ]]; then
            echo -e "Ping time is over $max_ping_time ms: $time ms"
        else
            echo -e "Ping OK: $time ms"
        fi
    else
        ((count++))
        echo -e "Ping failed ($count/$max_failures)"
        if (( count >= max_failures )); then
            echo -e "Ping to $address failed $max_failures times. Exiting."
            exit 1
        fi
    fi

    sleep 1
done 
