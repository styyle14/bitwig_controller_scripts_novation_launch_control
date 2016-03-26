
loadAPI(1);

host.defineController("Novation", "Launch Control", "1.0", "5b52fd9a-8d14-4cb3-a2a6-2d6aa926377c");
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["Launch Control MIDI 1"], ["Launch Control MIDI 1"]);

function init()
{
   host.getMidiInPort(0).setMidiCallback(onMidi);
   host.getMidiInPort(0).setSysexCallback(onSysex);
}

function exit()
{
}

function onMidi(status, data1, data2)
{
}

function onSysex(data)
{
}
