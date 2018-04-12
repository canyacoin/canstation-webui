# /bin/bash
echo 'Start building ...'
ng build --prod
rm public/*.js
cp -r dist/ public
echo 'Start Deploying ...'
firebase deploy
echo 'Build & Deploy completed successfully.'
