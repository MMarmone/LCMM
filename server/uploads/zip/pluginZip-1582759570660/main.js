
/*
Code generated with Faust version 2.22.5
Compilation options: -lang wasm-ib -scal -ftz 2
*/

function getJSONchorusForBrowser() {
	return '{"name": "chorusForBrowser","filename": "chorusForBrowser.dsp","version": "2.22.5","compile_options": "-lang wasm-ib -scal -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/07E440B897BC685EDBD5DBAF3AC4953D65F4887B/web/wap"],"size": 589996,"inputs": 1,"outputs": 2,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.1" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "designer": "Robert A. Moog" },{ "filename": "chorusForBrowser.dsp" },{ "library_path": "FaustDSP" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.1" },{ "name": "chorusForBrowser" },{ "oscillators_lib_name": "Faust Oscillator Library" },{ "oscillators_lib_version": "0.0" },{ "routes_lib_name": "Faust Signal Routing Library" },{ "routes_lib_version": "0.1" },{ "signals_lib_name": "Faust Signal Routing Library" },{ "signals_lib_version": "0.0" }],"ui": [ {"type": "hgroup","label": "chorusForBrowser","items": [ {"type": "hgroup","label": "Effects","meta": [{ "1": "" }],"items": [ {"type": "hgroup","label": "Chorus","meta": [{ "6": "" }],"items": [ {"type": "vgroup","label": "Knobs","meta": [{ "0": "" }],"items": [ {"type": "vslider","label": "Delay","address": "/chorusForBrowser/Effects/Chorus/Knobs/Delay","index": 589860,"meta": [{ "0": "" },{ "midi": "ctrl 4" },{ "style": "knob" }],"init": 0.5,"min": 0,"max": 1,"step": 1},{"type": "vslider","label": "Rate","address": "/chorusForBrowser/Effects/Chorus/Knobs/Rate","index": 589888,"meta": [{ "1": "" },{ "midi": "ctrl 2" },{ "style": "knob" },{ "unit": "Hz" }],"init": 0.5,"min": 0.01,"max": 7,"step": 0.0001},{"type": "vslider","label": "Depth","address": "/chorusForBrowser/Effects/Chorus/Knobs/Depth","index": 524308,"meta": [{ "4": "" },{ "midi": "ctrl 3" },{ "style": "knob" }],"init": 0.5,"min": 0,"max": 1,"step": 0.001},{"type": "vslider","label": "Deviation","address": "/chorusForBrowser/Effects/Chorus/Knobs/Deviation","index": 589872,"meta": [{ "6": "" },{ "midi": "ctrl 58" },{ "style": "knob" }],"init": 0.5,"min": 0,"max": 1,"step": 0.001}]},{"type": "vgroup","label": "Switches","meta": [{ "1": "" }],"items": [ {"type": "vslider","label": "Enable","address": "/chorusForBrowser/Effects/Chorus/Switches/Enable","index": 524288,"meta": [{ "0": "" },{ "midi": "ctrl 105" },{ "style": "knob" }],"init": 0,"min": 0,"max": 1,"step": 1}]}]}]}]}]}';
}
function getBase64CodechorusForBrowser() { return "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LjEiIH0seyAiZGVzaWduZXIiOiAiUm9iZXJ0IEEuIE1vb2ciIH0seyAiZmlsZW5hbWUiOiAiY2hvcnVzRm9yQnJvd3Nlci5kc3AiIH0seyAibGlicmFyeV9wYXRoIjogIkZhdXN0RFNQIiB9LHsgIm1hdGhzX2xpYl9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzX2xpYl9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRoc19saWJfdmVyc2lvbiI6ICIyLjEiIH0seyAibmFtZSI6ICJjaG9ydXNGb3JCcm93c2VyIiB9LHsgIm9zY2lsbGF0b3JzX2xpYl9uYW1lIjogIkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSIgfSx7ICJvc2NpbGxhdG9yc19saWJfdmVyc2lvbiI6ICIwLjAiIH0seyAicm91dGVzX2xpYl9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAicm91dGVzX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJzaWduYWxzX2xpYl9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFsc19saWJfdmVyc2lvbiI6ICIwLjAiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogImhncm91cCIsImxhYmVsIjogImNob3J1c0ZvckJyb3dzZXIiLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhncm91cCIsImxhYmVsIjogIkVmZmVjdHMiLCJtZXRhIjogW3sgIjEiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJDaG9ydXMiLCJtZXRhIjogW3sgIjYiOiAiIiB9XSwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJLbm9icyIsIm1ldGEiOiBbeyAiMCI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJEZWxheSIsImFkZHJlc3MiOiAiL2Nob3J1c0ZvckJyb3dzZXIvRWZmZWN0cy9DaG9ydXMvS25vYnMvRGVsYXkiLCJpbmRleCI6IDU4OTg2MCwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJtaWRpIjogImN0cmwgNCIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiUmF0ZSIsImFkZHJlc3MiOiAiL2Nob3J1c0ZvckJyb3dzZXIvRWZmZWN0cy9DaG9ydXMvS25vYnMvUmF0ZSIsImluZGV4IjogNTg5ODg4LCJtZXRhIjogW3sgIjEiOiAiIiB9LHsgIm1pZGkiOiAiY3RybCAyIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidW5pdCI6ICJIeiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAuMDEsIm1heCI6IDcsInN0ZXAiOiAwLjAwMDF9LHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiRGVwdGgiLCJhZGRyZXNzIjogIi9jaG9ydXNGb3JCcm93c2VyL0VmZmVjdHMvQ2hvcnVzL0tub2JzL0RlcHRoIiwiaW5kZXgiOiA1MjQzMDgsIm1ldGEiOiBbeyAiNCI6ICIiIH0seyAibWlkaSI6ICJjdHJsIDMiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAwMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJEZXZpYXRpb24iLCJhZGRyZXNzIjogIi9jaG9ydXNGb3JCcm93c2VyL0VmZmVjdHMvQ2hvcnVzL0tub2JzL0RldmlhdGlvbiIsImluZGV4IjogNTg5ODcyLCJtZXRhIjogW3sgIjYiOiAiIiB9LHsgIm1pZGkiOiAiY3RybCA1OCIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDAxfV19LHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJTd2l0Y2hlcyIsIm1ldGEiOiBbeyAiMSI6ICIiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJFbmFibGUiLCJhZGRyZXNzIjogIi9jaG9ydXNGb3JCcm93c2VyL0VmZmVjdHMvQ2hvcnVzL1N3aXRjaGVzL0VuYWJsZSIsImluZGV4IjogNTI0Mjg4LCJtZXRhIjogW3sgIjAiOiAiIiB9LHsgIm1pZGkiOiAiY3RybCAxMDUiIH0seyAic3R5bGUiOiAia25vYiIgfV0sImluaXQiOiAwLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMX1dfV19XX1dfV19"; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class chorusForBrowserNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        super(context, 'chorusForBrowser', options);
        
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
                this.setParamValue(path, chorusForBrowserNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
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
            this.setParamValue(pw.path, chorusForBrowserNode.remap(wheel, 0, 16383, pw.min, pw.max));
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
class chorusForBrowser {

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

            let real_url = (this.baseURL === "") ? "chorusForBrowser.wasm" : (this.baseURL + "/chorusForBrowser.wasm");
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
                let chorusForBrowserProcessorString1 = chorusForBrowserProcessorString.replace(re, json);
                let real_url = window.URL.createObjectURL(new Blob([chorusForBrowserProcessorString1], { type: 'text/javascript' }));
                
                this.context.audioWorklet.addModule(real_url).then(() => {
                    this.node = new chorusForBrowserNode(this.context, this.baseURL, 
                                        { numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                                        numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                                        channelCount: Math.max(1, parseInt(json_object.inputs)),
                                        outputChannelCount: [parseInt(json_object.outputs)],
                                        channelCountMode: "explicit",
                                        channelInterpretation: "speakers",
                                        processorOptions: options });
                    this.node.onprocessorerror = () => { console.log('An error from chorusForBrowser-processor was detected.');}
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
                        var element = createchorusForBrowserGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createchorusForBrowserGUI(this.node);
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

let chorusForBrowserProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class chorusForBrowserProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                chorusForBrowserProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                chorusForBrowserProcessor.parse_items(group.items, obj, callback);
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
                chorusForBrowserProcessor.parse_items(item.items, obj, callback);
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
                chorusForBrowserProcessor.parse_items(item.items, obj, callback);
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
            chorusForBrowserProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, chorusForBrowserProcessor.parse_item1);
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
            
            this.chorusForBrowser_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
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
            
            this.factory = this.chorusForBrowser_instance.exports;
            this.HEAP = this.chorusForBrowser_instance.exports.memory.buffer;
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
                chorusForBrowserProcessor.parse_ui(this.json_object.ui, this, chorusForBrowserProcessor.parse_item2);
                
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
        registerProcessor('chorusForBrowser', chorusForBrowserProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "chorusForBrowser";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.chorusForBrowser = chorusForBrowser;
    window.FaustchorusForBrowser = chorusForBrowser;
    window[dspName] = chorusForBrowser;
} else {
    module.exports = { chorusForBrowser };
}
