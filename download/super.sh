#!/bin/bash
awk '{print $1}' super.tar.gz.md5 client.tar.gz.md5 apm-agent.tar.gz.md5|sed ':a;N;s/\n//;ba;'
