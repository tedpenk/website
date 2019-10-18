export const Race = {
    /**
     * 亡灵
     */
    undead: 1,
    /**
     * 牛头人
     */
    Minotaur: 2,
    /**
     * 兽人
     */
    Orc: 3,
    /**
     * 巨魔
     */
    Ogre: 4
}

export const Occupations = {
    /**
     * 战士
     */
    warrior: {
        id: 1,
        name: "战士",
        talent: {
            arms: {
                id: 11,
                name: "武器"
            },
            fury: {
                id: 12,
                name: "狂怒"
            },
            protection: {
                id: 13,
                name: "防护"
            }
        }
    },
    mage: {
        id: 2,
        name: "法师",
        talent: {
            arcane: {
                id: 21,
                name: "奥术"
            },
            fire: {
                id: 22,
                name: "火焰"
            },
            frost: {
                id: 23,
                name: "冰霜"
            }
        }
    },
    druid: {
        id: 3,
        name: "德鲁伊",
        talent: {
            balance: {
                id: 31,
                name: "平衡"
            },
            feralcombat: {
                id: 32,
                name: "野性"
            },
            restoration: {
                id: 33,
                name: "恢复"
            }
        }
    },
    hunter: {
        id: 4,
        name: "猎人",
        talent: {
            beastmastery: {
                id: 41,
                name: "野兽控制"
            },
            marksmanship: {
                id: 42,
                name: "射击"
            },
            survival: {
                id: 43,
                name: "生存"
            }
        }
    },
    priest: {
        id: 5,
        name: "牧师",
        talent: {
            discipline: {
                id: 51,
                name: "戒律"
            },
            holy: {
                id: 52,
                name: "神圣"
            },
            shadow: {
                id: 53,
                name: "暗影"
            }
        }
    },
    rogue: {
        id: 6,
        name: "盗贼",
        talent: {
            assassination: {
                id: 61,
                name: "刺杀"
            },
            combat: {
                id: 62,
                name: "战斗"
            },
            subtlety: {
                id: 63,
                name: "敏锐"
            }
        }
    },
    shaman: {
        id: 7,
        name: "萨满",
        talent: {
            elemental: {
                id: 71,
                name: "元素"
            },
            enhancement: {
                id: 72,
                name: "增强"
            },
            restoration: {
                id: 73,
                name: "恢复"
            }
        }
    },
    warlock: {
        id: 8,
        name: "术士",
        talent: {
            affliction: {
                id: 81,
                name: "痛苦"
            },
            demonology: {
                id: 82,
                name: "恶魔"
            },
            destruction: {
                id: 83,
                name: "毁灭"
            }
        }
    }
}