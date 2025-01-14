#!/usr/bin/env sh
rm -r ./build
echo 'The following "npm" command builds your Node.js/React application for'
echo 'production in the local "build" directory (i.e. within the'
echo '"/var/jenkins_home/workspace/simple-node-js-react-app" directory),'
echo 'correctly bundles React in production mode and optimizes the build for'
echo 'the best performance.'
set -x
npm run build

set +x

echo 'The following "pm2" command runs your Node.js/React application in'
echo 'production mode and makes the application available for web browsing.'

sleep 1
echo $! > .pidfile
set +x
