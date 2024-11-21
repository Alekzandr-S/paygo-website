#!/usr/bin/env sh
echo 'build starting'

echo 'installing nginx'
yum install epel-release
yes | yum install nginx
systemctl start nginx
systemctl enable nginx
echo 'nginx setup complete'

echo 'configuring firewall'
firewall-cmd --permanent --zone=public --add-service=http
firewall-cmd --permanent --zone=public --add-service=https
firewall-cmd --zone=public --add-port=3001/tcp --permanent
firewall-cmd --reload
setsebool -P httpd_can_network_connect 1
echo 'firewall setup complete'

echo 'configuring nginx'
cp ./nginx-config/website.conf /etc/nginx/conf.d
nginx -t
systemctl restart nginx
echo 'configuring nginx complete'

echo 'installing nodejs'
yum install -y gcc-c++ make
dnf module install nodejs:20 -y
node -v
npm -v
echo 'nodejs installed'

echo 'install npm packages'
npm install
echo 'build complete'

echo 'install pm2 global'
npm install pm2@latest -g
echo 'pm2 installed'