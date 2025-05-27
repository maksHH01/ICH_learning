#!/bin/bash
#
TARGET_DIR="/opt/280225-wdm"

if [ ! -d "$TARGET_DIR" ]; then
    echo "Директория $TARGET_DIR не существует."
    exit 1
fi

find "$TARGET_DIR" -type f -name "*.sh" | while read -r file; do
    if [ ! -x "$file" ]; then
        echo "Добавляю права на исполнение: $file"
        chmod +x "$file"
    else
        echo "Файл уже исполняемый: $file"
    fi
done
