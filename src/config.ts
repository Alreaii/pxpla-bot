import { BotConfig } from './structures/types'; 

export const config: BotConfig = {
    groupId: 12093913,
    slashCommands: true,
    legacyCommands: {
        enabled: true,
        prefixes: ['c!'],
    },
    permissions: {
        all: ['882021689607720963'],
        ranking: ['882590649994592346'],
        users: ['882590649994592346'],
        shout: ['882590649994592346'],
        join: ['882590649994592346'],
        signal: ['882590649994592346'],
        admin: ['882021689607720963'],
    },
    logChannels: {
        actions: '882578235936870431',
        shout: '882578235936870431',
    },
    database: {
        enabled: true,
        type: 'mongodb',
    },
    api: false,
    maximumRank: 255,
    verificationChecks: true,
    firedRank: 1,
    suspendedRank: 1,
    recordManualActions: true,
    memberCount: {
        enabled: true,
        channelId: '882021689947471874',
        milestone: 100,
        onlyMilestones: true,
    },
    xpSystem: {
        enabled: true,
        autoRankup: true,
        roles: [
            {
                rank: 5,
                xp: 1,
            },
            {
                rank: 10,
                xp: 50,
            },
            {
                rank: 15,
                xp: 100,
            },
                        {
                rank: 20,
                xp: 150,
            },
                        {
                rank: 25,
                xp: 300,
            },
                        {
                rank: 30,
                xp: 600,
            },
                        {
                rank: 35,
                xp: 1000,
            },
        ],
    },
    antiAbuse: {
        enabled: false,
        clearDuration: 1 * 60,
        threshold: 5,
        demotionRank: 1,
        bypassRoleId: '',
    },
    activity: {
        enabled: false,
        type: 'WATCHING',
        value: 'for commands.',
    },
    status: 'online',
    deleteWallURLs: false,
}
