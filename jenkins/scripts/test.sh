#!/usr/bin/env sh

echo 'Running test'
set -x
curl http://10.51.62.63:3001

echo 'Now...'
echo 'Visit http://10.51.62.63:3001 to see your Node.js/React application in action.'
echo '(This is why you specified the "args ''-p 3001:3000''" parameter when you'
echo 'created your initial Pipeline as a Jenkinsfile.)'
