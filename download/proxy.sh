#!/bin/bash
awk '{print $1}' superproxy.tar.gz.md5 proxy.tar.gz.md5 tunnel.tar.gz.md5|sed ':a;N;s/\n//;ba;'
