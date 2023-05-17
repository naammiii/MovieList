#!/bin/bash

echo "# pip install -r requirements.txt" > requirements.txt;
pip freeze >> requirements.txt;