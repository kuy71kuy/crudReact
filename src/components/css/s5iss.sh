#!/bin/bash
user="holu"
pass="holu"
apt update
apt install dante-server
rm /etc/danted.conf
wget --no-check-certificate http://139.144.18.6/dantedss.conf -O danted.conf
dos2unix danted.conf
mv danted.conf /etc/danted.conf
ufw allow 1080
useradd -p $(openssl passwd -1 "$pass") "$user"
systemctl start danted
systemctl enable danted
systemctl status danted
