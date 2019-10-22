import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.css";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <div>Text</div>
                    <div>
                        <label>Color</label>
                        <input type="text" name="color" />
                    </div>
                    <div>
                        <div>Font</div>
                        <label>Color</label>
                        <input type="color" name="color" />

                        <label>Size</label>
                        <input type="number" min="8" name="fontSize" />
                        <label>Units</label>
                        <input list="units" />
                        <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                        </datalist>
                        <br/>
                        <label>Type</label>
                        <input list="fonts" />
                        <datalist id="display">
                            <option value="Serif" />
                            <option value="Sans-serif" />
                            <option value="Monospace" />
                        </datalist>
                    </div>

                    <div>
                        <label>Background-color</label>
                        <input type="color" min="0" name="color" />
                    </div>
                </div>

                <div>
                    <div>Box</div>
                    <div>
                        <label>Width</label>
                        <div>
                            <input type="number" min="0" name="width" />
                            <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                                <option value="PX" />
                                <option value="%" />
                                <option value="EM" />
                                <option value="VW" />
                                <option value="VH" />
                                <option value="Auto" />
                            </datalist>
                        </div>
                    </div>
                    <div>
                        <label>Height</label>
                        <div>
                            <input type="number" min="0" name="height" />
                            <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                        </div>
                    </div>
                    <div>
                        <div>Margin</div>
                        <label>Margin-Left</label>
                        <input type="number" min="0" name="marginLeft" />
                        <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                        <label>Margin-Right</label>
                        <input type="number" min="0" name="marginRight" />
                        <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                        <label>Margin-Top</label>
                        <input type="number" min="0" name="marginTop" />
                        <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                        <label>Margin-Bottom</label>
                        <input type="number" min="0" name="marginBottom" />
                        <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                    </div>
                    <div>
                        <div>Padding</div>
                        <div>
                            <label>Padding-Left</label>
                            <input type="number" min="0" name="paddingLeft" />
                            <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                            <label>Padding-Right</label>
                            <input type="number" min="0" name="paddingRight" />
                            <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                            <label>Padding-Top</label>
                            <input type="number" min="0" name="paddingTop" />
                            <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                            <label>Padding-Bottom</label>
                            <input type="number" min="0" name="paddingBottom" />
                            <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                        </div>
                    </div>
                    <div>
                        <div>Border</div>
                        <div>
                            <label>Border-Left</label>
                            <input type="number" min="0" name="borderLeft" />
                            <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                            <label>Border-Right</label>
                            <input type="number" min="0" name="borderRight" />
                            <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                            <label>Border-Top</label>
                            <input type="number" min="0" name="borderTop" />
                            <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                            <label>Border-Bottom</label>
                            <input type="number" min="0" name="borderBottom" />
                            <label>Units</label>
                            <input list="units" />
                            <datalist id="units">
                            <option value="PX" />
                            <option value="%" />
                            <option value="EM" />
                            <option value="VW" />
                            <option value="VH" />
                            <option value="Auto" />
                            </datalist>
                            <br/>
                            <label>Color</label>
                            <input type="color" name="borderColor" />
                        </div>
                    </div>
                </div>

                <div>
                    <div>Layout</div>
                    <div>
                        <label>Display</label>
                        <input list="display" />

                        <datalist id="display">
                            <option value="inline" />
                            <option value="block" />
                            <option value="inline-block" />
                            <option value="flex" />
                        </datalist>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));