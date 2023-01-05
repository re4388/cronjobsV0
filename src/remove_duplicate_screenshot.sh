#!/bin/bash

# note:
# the file ia actually being used by raycast is located at
# /Users/re4388/project/personal/raycast_ext/remove_duplicated_screenshot


# update 2023-01-02-19_03_09
# this file is also setup in the crobtab

function get_duplicate_screenshot(){
    cd /Users/re4388/"OneDrive - g.ntu.edu.tw"/screenshots  || return
    find . -name '*).png' | grep "("
}



function echo_after_check(){
    RESULT=$(get_duplicate_screenshot)
    if (exit $?) 
    then
        echo "have duplicated: $RESULT"    
    else
        echo "Removed successfully"
    fi
}



function remove_screenshot_duplicate(){
	cd /Users/re4388/"OneDrive - g.ntu.edu.tw"/screenshots  || return
	# find all duplicated png, like (2) and (3).png
	find . -name '*).png' > ./tmp
	# add "" at each file
	sed 's/$/"/' ./tmp > ./tmp2
	sed 's/^/"/' ./tmp2 > ./tmp3
	# remove them 
	cat ./tmp3 | xargs rm -f
}


#####################

function main(){
  remove_screenshot_duplicate
  echo_after_check
}


main


# >> ~/cron-job-output.log