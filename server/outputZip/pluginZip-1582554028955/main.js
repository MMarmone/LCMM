
/*
Code generated with Faust version 2.22.5
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONechoForBrowser() {
	return '{"name": "echoForBrowser","filename": "echoForBrowser.dsp","version": "2.22.5","compile_options": "-lang wasm-ib -scal -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/20CB2249810B704E8DC9C300BC3923F6734C4E55/web/wap"],"size": 262244,"inputs": 1,"outputs": 1,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.1" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "designer": "Robert A. Moog" },{ "filename": "echoForBrowser.dsp" },{ "library_path": "FaustDSP" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.1" },{ "name": "echoForBrowser" },{ "signals_lib_name": "Faust Signal Routing Library" },{ "signals_lib_version": "0.0" }],"ui": [ {"type": "hgroup","label": "echoForBrowser","items": [ {"type": "hgroup","label": "Effects","meta": [{ "1": "" }],"items": [ {"type": "hgroup","label": "Echo","meta": [{ "4": "" }],"items": [ {"type": "vgroup","label": "Knobs","meta": [{ "0": "" }],"items": [ {"type": "vslider","label": "Delay","address": "/echoForBrowser/Effects/Echo/Knobs/Delay","index": 262196,"meta": [{ "0": "" },{ "midi": "ctrl 4" },{ "style": "knob" }],"init": 0.5,"min": 0.001,"max": 0.742039,"step": 0.001},{"type": "vslider","label": "Warp","address": "/echoForBrowser/Effects/Echo/Knobs/Warp","index": 262216,"meta": [{ "0": "" },{ "midi": "ctrl 62" },{ "style": "knob" }],"init": 0,"min": -1,"max": 1,"step": 0.001},{"type": "vslider","label": "DelayT60","address": "/echoForBrowser/Effects/Echo/Knobs/DelayT60","index": 262188,"meta": [{ "1": "" },{ "midi": "ctrl 60" },{ "style": "knob" }],"init": 0.5,"min": 0,"max": 100,"step": 0.001},{"type": "vslider","label": "Feedback","address": "/echoForBrowser/Effects/Echo/Knobs/Feedback","index": 36,"meta": [{ "2": "" },{ "midi": "ctrl 3" },{ "style": "knob" }],"init": 0.3,"min": 0,"max": 1,"step": 0.0001},{"type": "vslider","label": "Amp","address": "/echoForBrowser/Effects/Echo/Knobs/Amp","index": 16,"meta": [{ "3": "" },{ "midi": "ctrl 2" },{ "style": "knob" }],"init": 0.5,"min": 0,"max": 1,"step": 0.001},{"type": "vslider","label": "FeedbackSm","address": "/echoForBrowser/Effects/Echo/Knobs/FeedbackSm","index": 28,"meta": [{ "5": "" },{ "midi": "ctrl 76" },{ "style": "knob" }],"init": 0,"min": 0,"max": 1,"step": 1e-05}]},{"type": "vgroup","label": "Switches","meta": [{ "1": "" }],"items": [ {"type": "vslider","label": "EnableEcho","address": "/echoForBrowser/Effects/Echo/Switches/EnableEcho","index": 32,"meta": [{ "7": "" },{ "midi": "ctrl 105" },{ "style": "knob" }],"init": 0,"min": 0,"max": 1,"step": 1}]}]}]}]}]}';
}
function getBase64CodeechoForBrowser() { return "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bGliX25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljc19saWJfdmVyc2lvbiI6ICIwLjEiIH0seyAiY29tcGlsYXRpb25fb3B0aW9ucyI6ICItc2luZ2xlIC1zY2FsIC1JIGxpYnJhcmllcy8gLUkgcHJvamVjdC8gLWxhbmcgd2FzbSIgfSx7ICJkZWxheXNfbGliX25hbWUiOiAiRmF1c3QgRGVsYXkgTGlicmFyeSIgfSx7ICJkZWxheXNfbGliX3ZlcnNpb24iOiAiMC4xIiB9LHsgImRlc2lnbmVyIjogIlJvYmVydCBBLiBNb29nIiB9LHsgImZpbGVuYW1lIjogImVjaG9Gb3JCcm93c2VyLmRzcCIgfSx7ICJsaWJyYXJ5X3BhdGgiOiAiRmF1c3REU1AiIH0seyAibWF0aHNfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHNfbGliX25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzX2xpYl92ZXJzaW9uIjogIjIuMSIgfSx7ICJuYW1lIjogImVjaG9Gb3JCcm93c2VyIiB9LHsgInNpZ25hbHNfbGliX25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIgfSx7ICJzaWduYWxzX2xpYl92ZXJzaW9uIjogIjAuMCIgfV0sInVpIjogWyB7InR5cGUiOiAiaGdyb3VwIiwibGFiZWwiOiAiZWNob0ZvckJyb3dzZXIiLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhncm91cCIsImxhYmVsIjogIkVmZmVjdHMiLCJtZXRhIjogW3sgIjEiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJFY2hvIiwibWV0YSI6IFt7ICI0IjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiS25vYnMiLCJtZXRhIjogW3sgIjAiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiRGVsYXkiLCJhZGRyZXNzIjogIi9lY2hvRm9yQnJvd3Nlci9FZmZlY3RzL0VjaG8vS25vYnMvRGVsYXkiLCJpbmRleCI6IDI2MjE5NiwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJtaWRpIjogImN0cmwgNCIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMC4wMDEsIm1heCI6IDAuNzQyMDM5LCJzdGVwIjogMC4wMDF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiV2FycCIsImFkZHJlc3MiOiAiL2VjaG9Gb3JCcm93c2VyL0VmZmVjdHMvRWNoby9Lbm9icy9XYXJwIiwiaW5kZXgiOiAyNjIyMTYsIm1ldGEiOiBbeyAiMCI6ICIiIH0seyAibWlkaSI6ICJjdHJsIDYyIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogMCwibWluIjogLTEsIm1heCI6IDEsInN0ZXAiOiAwLjAwMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJEZWxheVQ2MCIsImFkZHJlc3MiOiAiL2VjaG9Gb3JCcm93c2VyL0VmZmVjdHMvRWNoby9Lbm9icy9EZWxheVQ2MCIsImluZGV4IjogMjYyMTg4LCJtZXRhIjogW3sgIjEiOiAiIiB9LHsgIm1pZGkiOiAiY3RybCA2MCIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMCwibWF4IjogMTAwLCJzdGVwIjogMC4wMDF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiRmVlZGJhY2siLCJhZGRyZXNzIjogIi9lY2hvRm9yQnJvd3Nlci9FZmZlY3RzL0VjaG8vS25vYnMvRmVlZGJhY2siLCJpbmRleCI6IDM2LCJtZXRhIjogW3sgIjIiOiAiIiB9LHsgIm1pZGkiOiAiY3RybCAzIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogMC4zLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMDAxfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIkFtcCIsImFkZHJlc3MiOiAiL2VjaG9Gb3JCcm93c2VyL0VmZmVjdHMvRWNoby9Lbm9icy9BbXAiLCJpbmRleCI6IDE2LCJtZXRhIjogW3sgIjMiOiAiIiB9LHsgIm1pZGkiOiAiY3RybCAyIiB9LHsgInN0eWxlIjogImtub2IiIH1dLCJpbml0IjogMC41LCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMDF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiRmVlZGJhY2tTbSIsImFkZHJlc3MiOiAiL2VjaG9Gb3JCcm93c2VyL0VmZmVjdHMvRWNoby9Lbm9icy9GZWVkYmFja1NtIiwiaW5kZXgiOiAyOCwibWV0YSI6IFt7ICI1IjogIiIgfSx7ICJtaWRpIjogImN0cmwgNzYiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMWUtMDV9XX0seyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIlN3aXRjaGVzIiwibWV0YSI6IFt7ICIxIjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIkVuYWJsZUVjaG8iLCJhZGRyZXNzIjogIi9lY2hvRm9yQnJvd3Nlci9FZmZlY3RzL0VjaG8vU3dpdGNoZXMvRW5hYmxlRWNobyIsImluZGV4IjogMzIsIm1ldGEiOiBbeyAiNyI6ICIiIH0seyAibWlkaSI6ICJjdHJsIDEwNSIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDAsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAxfV19XX1dfV19XX0="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class echoForBrowserNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'echoForBrowser', options);
        
        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);
     
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                            }
                        }
                    }
                }      
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });     
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];
        
        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) {}
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API
    
    /**
     * Destroy the node, deallocate resources.
     */
    destroy()
    {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON()
    {
        return this.json;
    }
    
    // For WAP
    async getMetadata() 
    {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
            	return responseJSON.json();
        	}).then(json => {
        		resolve(json);
        	})
    	});
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    // For WAP
    setParam(path, val)
    {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    // For WAP
    getParam(path) 
    {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }

    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    // For WAP
    inputChannelCount() 
    {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() 
    {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
    
    // For WAP
    getDescriptor() 
    {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, echoForBrowserNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, echoForBrowserNode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }
    
    // For WAP
    onMidi(data) 
    {
     	midiMessage(data);
    }
    
    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() 
    {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) 
    {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }
    
    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) 
    {
        this.setState(this.presets[patch])
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
    
}

// Factory class
class echoForBrowser {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "")
    {
    	console.log("baseLatency " + context.baseLatency);
    	console.log("outputLatency " + context.outputLatency);
    	console.log("sampleRate " + context.sampleRate);
    	
        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];
    }

    heap2Str(buf)
    {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }
    
    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load()
    {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,
                        
                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                        
                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    
                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "echoForBrowser.wasm" : (this.baseURL + "/echoForBrowser.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);
            
            return new Promise((resolve, reject) => {   
            
                let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
                let json = this.heap2Str(HEAPU8);
                let json_object = JSON.parse(json);  
                let options = { wasm_module: dspModule, json: json };
                
                let re = /JSON_STR/g;
                let echoForBrowserProcessorString1 = echoForBrowserProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([echoForBrowserProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new echoForBrowserNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from echoForBrowser-processor was detected.');}
                    return (this.node);
                }).then((node) => {
                    resolve(node);
                }).catch((e) => {
                    reject(e);
                });
            });
            
        } catch (e) {
            console.error(e);
            console.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    	
    }
    
    async loadGui()
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createechoForBrowserGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createechoForBrowserGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

	linkExists(url) 
	{
    	return document.querySelectorAll(`link[href="${url}"]`).length > 0;
   	}
}

// Template string for AudioWorkletProcessor

let echoForBrowserProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class echoForBrowserProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                echoForBrowserProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                echoForBrowserProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                echoForBrowserProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                echoForBrowserProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            echoForBrowserProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, echoForBrowserProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            this.running = true;
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.echoForBrowser_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.echoForBrowser_instance.exports;
            this.HEAP = this.echoForBrowser_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                echoForBrowserProcessor.parse_ui(this.json_object.ui, this, echoForBrowserProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
        
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return this.running;
    	}
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('echoForBrowser', echoForBrowserProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "echoForBrowser";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.echoForBrowser = echoForBrowser;
    window.FaustechoForBrowser = echoForBrowser;
    window[dspName] = echoForBrowser;
} else {
    module.exports = { echoForBrowser };
}
