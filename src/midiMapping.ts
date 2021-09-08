export class MidiMapping {
    private constructor() { }

    public static mapping: Record<number, Record<number, string>> = {
        0xB0: {
            0x00: "CrossfaderMsb",
            0x20: "CrossfaderLsb",
            0x04: "HeadphoneMsb",
            0x24: "HeadphoneLsb",
            0x05: "HeadphoneMixMsb",
            0x25: "HeadphoneMixLsb",
            0x01: "TraxEncoder"
        },
        0xB3: {
            0x01: "TraxEncoderShifted"
        },
        0x90: {
            0x00: "TraxButton"
        },
        0x93: {
            0x00: "TraxButtonShifted"
        },
        0x91: {
            0x0D: "0Load",
            0x07: "0Play",
            0x06: "0Cue",
            0x05: "0Sync",
            0x04: "0Shift",
            0x0C: "0Pfl",
            0x2C: "0LoopButton",
            0x08: "0JogTouchButton",
            0x1E: "0TempoLedUp",
            0x1F: "0TempoLedDown",
            0x09: "0LoopIn",
            0x0A: "0LoopOut"
        },
        0x94: {
            0x0D: "0LoadShifted",
            0x0C: "0PflShifted",
            0x2C: "0LoopButtonShifted",
            0x08: "0JogTouchButtonShifted",
            0x09: "0LoopInShifted",
            0x0A: "0LoopOutShifted"
        },
        0xB1: {
            0x0E: "0LoopEncoder",
            0x09: "0JogEncoderUntouched",
            0x0A: "0JogEncoderTouched",
            0x08: "0TempoMsb",
            0x28: "0TempoLsb",
            0x00: "0VolumeMsb",
            0x20: "0VolumeLsb",
            0x01: "0FilterMsb",
            0x21: "0FilterLsb",
            0x02: "0EqLowMsb",
            0x22: "0EqLowLsb",
            0x03: "0EqMidMsb",
            0x23: "0EqMidLsb",
            0x04: "0EqHighMsb",
            0x24: "0EqHighLsb",
            0x05: "0GainMsb",
            0x25: "0GainLsb"
        },
        0xB4: {
            0x0E: "0LoopEncoderShifted",
            0x09: "0JogEncoderUntouchedShifted",
            0x0A: "0JogEncoderTouchedShifted"
        },
        0x96: {
            0x00: "0Hotcue0",
            0x08: "0Hotcue0Shifted",
            0x01: "0Hotcue1",
            0x09: "0Hotcue1Shifted",
            0x02: "0Hotcue2",
            0x0A: "0Hotcue2Shifted",
            0x03: "0Hotcue3",
            0x0B: "0Hotcue3Shifted",
            0x04: "0Hotcue4",
            0x0C: "0Hotcue4Shifted",
            0x05: "0Hotcue5",
            0x0D: "0Hotcue5Shifted",
            0x06: "0Hotcue6",
            0x0E: "0Hotcue6Shifted",
            0x07: "0Hotcue7",
            0x0F: "0Hotcue7Shifted"
        },
        0x92: {
            0x0D: "1Load",
            0x07: "1Play",
            0x06: "1Cue",
            0x05: "1Sync",
            0x04: "1Shift",
            0x0C: "1Pfl",
            0x2C: "1LoopButton",
            0x08: "1JogTouchButton",
            0x1E: "1TempoLedUp",
            0x1F: "1TempoLedDown",
            0x09: "1LoopIn",
            0x0A: "1LoopOut"
        },
        0x95: {
            0x0D: "1LoadShifted",
            0x0C: "1PflShifted",
            0x2C: "1LoopButtonShifted",
            0x08: "1JogTouchButtonShifted",
            0x09: "1LoopInShifted",
            0x0A: "1LoopOutShifted"
        },
        0xB2: {
            0x0E: "1LoopEncoder",
            0x09: "1JogEncoderUntouched",
            0x0A: "1JogEncoderTouched",
            0x08: "1TempoMsb",
            0x28: "1TempoLsb",
            0x00: "1VolumeMsb",
            0x20: "1VolumeLsb",
            0x01: "1FilterMsb",
            0x21: "1FilterLsb",
            0x02: "1EqLowMsb",
            0x22: "1EqLowLsb",
            0x03: "1EqMidMsb",
            0x23: "1EqMidLsb",
            0x04: "1EqHighMsb",
            0x24: "1EqHighLsb",
            0x05: "1GainMsb",
            0x25: "1GainLsb"
        },
        0xB5: {
            0x0E: "1LoopEncoderShifted",
            0x09: "1JogEncoderUntouchedShifted",
            0x0A: "1JogEncoderTouchedShifted"
        },
        0x97: {
            0x00: "1Hotcue0",
            0x08: "1Hotcue0Shifted",
            0x01: "1Hotcue1",
            0x09: "1Hotcue1Shifted",
            0x02: "1Hotcue2",
            0x0A: "1Hotcue2Shifted",
            0x03: "1Hotcue3",
            0x0B: "1Hotcue3Shifted",
            0x04: "1Hotcue4",
            0x0C: "1Hotcue4Shifted",
            0x05: "1Hotcue5",
            0x0D: "1Hotcue5Shifted",
            0x06: "1Hotcue6",
            0x0E: "1Hotcue6Shifted",
            0x07: "1Hotcue7",
            0x0F: "1Hotcue7Shifted"
        }
    };

    private static reversedMapping: Record<string, [number, number]> = {};

    public static initReversedMapping() {
        for (const statusGroupKey in MidiMapping.mapping) {
            const statusGroup = MidiMapping.mapping[statusGroupKey];
            for (const midiNo in statusGroup) {
                const controlName = statusGroup[midiNo];
                MidiMapping.reversedMapping[controlName] = [statusGroupKey as unknown as number, midiNo as unknown as number]; // idk
            }
        }
    }

    public static getMidiForControl(controlName: string): [number, number] {
        return MidiMapping.reversedMapping[controlName];
    }
}
