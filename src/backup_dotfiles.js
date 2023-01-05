"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require('fs');
const path = require('path');
const schedule = require('node-schedule');
const HOME = '/Users/re4388';
const REPO_PATH = `${HOME}/project/personal/my-github-pjt/dotfiles`;
let cp_fn_args = [];
// vscode
cp_fn_args.push({
    originFile: `${HOME}/Library/Application Support/Code/User/keybindings.json`,
    destFile: `${REPO_PATH}/VSCode/mac-keybindings.json`
});
cp_fn_args.push({
    originFile: `${HOME}/Library/Application Support/Code/User/settings.json`,
    destFile: `${REPO_PATH}/VSCode/mac-settings.json`
});
cp_fn_args.push({
    originFile: `${HOME}/Library/Application Support/Code/User/tasks.json`,
    destFile: `${REPO_PATH}/VSCode/mac-tasks.json`
});
// pet
cp_fn_args.push({
    originFile: `${HOME}/.config/pet/snippet.toml`,
    destFile: `${REPO_PATH}/pet/pet-backup.toml`
});
// zsh
cp_fn_args.push({
    originFile: `${HOME}/.zshrc`,
    destFile: `${REPO_PATH}/zsh/zsh-backup.ts`
});
cp_fn_args.push({
    originFile: `${HOME}/.oh-my-zsh/custom/aliases.zsh`,
    destFile: `${REPO_PATH}/zsh/aliases-backup.ts`
});
// git
cp_fn_args.push({
    originFile: `${HOME}/.gitconfig`,
    destFile: `${REPO_PATH}/git/.gitconfig-backup.ts`
});
// starship
cp_fn_args.push({
    originFile: `${HOME}/.config/starship.toml`,
    destFile: `${REPO_PATH}/starship/.starship-backup.toml`
});
let errorFile = [];
// this will call each fn I push into cp_fns
// the reason I want to do this?
// I can separate the "data collect part" and "execute part"
// and then, for example, I can simple comment out `main()` fn 
function main() {
    cp_fn_args.forEach(cp_fn_arg => cp(cp_fn_arg.originFile, cp_fn_arg.destFile));
    if (errorFile.length > 0) {
        errorFile.forEach(fileName => console.log(`we have copy error occurred at ${fileName}`));
    }
    else {
        console.log(`all file are copied successfully!`);
        errorFile = [];
    }
}
/////////////// utils /////////////////
function cp(from, to) {
    // copy async
    fs.copyFile(from, to, (err) => {
        if (err) {
            errorFile.push(from);
            // console.error(`${from} copy had occurred error, error msg: `, err);
        }
        // remove below logs, too much logs
        // const fromFile = path.basename(from);
        // const toFile = path.basename(to);
        // console.log(`File copied successfully! ${fromFile} -> ${toFile}`);
    });
}
//////// crontab debug ////////////////////////
//////////////////////////////////////////////
// const runAtEveryFiveSec = "*/5 * * * * *"
// const runAtEveryMin = '*/1 * * * *'
const runAtEveryDayAt3AM = '* 3 * * *';
schedule.scheduleJob(runAtEveryDayAt3AM, function () {
    return __awaiter(this, void 0, void 0, function* () {
        main();
        // cp(`${HOME}/.zshrc`, `${REPO_PATH}/zsh/zsh-debug.ts`)
    });
});
// archive note
////////////////
// say you want to run this in ts-node?
// ts-node ./cron-job/back.ts
