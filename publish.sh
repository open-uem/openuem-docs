#!/bin/bash
site='/woodpecker/src/github.com/doncicuto/openuem-docs'
apt-get update -y
apt-get install sshpass -y
sshpass -p $SFTP_PASS scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -r $site/build/* $SFTP_USER@$SFTP_HOST:/home/$SFTP_USER/docs/