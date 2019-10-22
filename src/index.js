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
                <div className="option-group">
                    <p className="option-group-label">
                        <span className="title">Text</span>
                        <span className="panel expanded"></span>
                    </p>
                    <div className="content">
                        <div className="option">
                            <label>Color</label>
                            <input type="color" name="color" />
                        </div>


                        <div className="option">
                            <label>Background-color</label>
                            <input type="color" min="0" name="background-color" />
                        </div>

                        <div className="option">
                            <label>Size</label>
                            <input type="number" min="8" name="fontSize" />
                            <input list="fontSizeunits" placeholder="PX" name="font-size"/>
                            <datalist id="fontSizeunits">
                                <option value="PX" />
                                <option value="%" />
                                <option value="EM" />
                                <option value="VW" />
                                <option value="VH" />
                                <option value="Auto" />
                            </datalist>
                        </div>

                        <div className="option">
                            <label>Type</label>
                            <input list="fonts" name="font-family"/>
                            <datalist id="fonts">
                                <option value="Serif" />
                                <option value="Sans-serif" />
                                <option value="Monospace" />
                            </datalist>
                        </div>


                        <div className="option">
                            <label>Font-style</label>
                            <input list="fontsStyle" name="font-style"/>
                            <datalist id="fontsStyle">
                                <option value="Normal" />
                                <option value="Ittalic" />
                                <option value="Oblique" />
                            </datalist>
                        </div>

                        <div className="option">
                            <label>Font-weight</label>
                            <input list="fontWeight" name="font-weight"/>
                            <datalist id="fontWeight">
                                <option value="normal" />
                                <option value="bold" />
                                <option value="lighter" />
                                <option value="bolder" />
                                <option value="Enter Number 100-900" />
                            </datalist>
                        </div>

                        <div className="option">
                            <label>Text-Transform</label>
                            <input list="textTransform" name="text-transform" />
                            <datalist id="textTransform">
                                <option value="uppercase" />
                                <option value="lowercase" />
                                <option value="capitalize" />
                                <option value="full-width" />
                            </datalist>
                        </div>

                        <div className="option">
                            <label>Text-Decoration</label>
                            <input list="textDecoration" name="text-decoration"/>
                            <datalist id="textDecoration">
                                <option value="underline" />
                                <option value="overline" />
                                <option value="line-through" />
                            </datalist>
                        </div>


                        <div className="option">
                            <label>Text-Align</label>
                            <input list="textAlign" name="text-align"/>
                            <datalist id="textAlign">
                                <option value="left" />
                                <option value="right" />
                                <option value="center" />
                                <option value="justify" />
                            </datalist>
                        </div>


                        <div className="option">
                            <label>Letter spacing</label>
                            <input type="number" min="8" name="letter-spacing" />
                            <input list="letterSpacing" placeholder="PX" />
                            <datalist id="letterSpacing">
                                <option value="PX" />
                            </datalist>
                        </div>


                        <div className="option">
                            <label>Word spacing</label>
                            <input type="number" min="8" name="word-spacing" />
                            <input list="wordSpacing" placeholder="PX" />
                            <datalist id="wordSpacing">
                                <option value="PX" />
                            </datalist>
                        </div>
                    </div>
                </div>

                <div className="option-group">
                    <p className="option-group-label">
                        <span className="title">Box</span>
                        <span className="panel expanded"></span>
                    </p>
                    <div className="content">
                        <div className="option">
                            <div>Size</div>
                            <div>
                                <label>Width</label>
                                <input type="number" min="0" name="width" />

                                <input list="widthunits" placeholder="PX" />
                                <datalist id="widthunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                            </div>
                            <div>
                                <label>Height</label>
                                <input type="number" min="0" name="height" />

                                <input list="heightunits" placeholder="PX" />
                                <datalist id="heightunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="option">
                            <div>Margin</div>
                            <div>
                                <label>Margin-Left</label>
                                <input type="number" min="0" name="margin-left" />

                                <input list="marginLeftunits" placeholder="PX" />
                                <datalist id="marginLeftunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                                <br />

                                <label>Margin-Right</label>
                                <input type="number" min="0" name="margin-right" />

                                <input list="marginRightunits" placeholder="PX" />
                                <datalist id="marginRightunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                                <br />

                                <label>Margin-Top</label>
                                <input type="number" min="0" name="margin-top" />

                                <input list="marginTopunits" placeholder="PX" />
                                <datalist id="marginTopunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                                <br />

                                <label>Margin-Bottom</label>
                                <input type="number" min="0" name="margin-bottom" />

                                <input list="marginBottomunits" placeholder="PX" />
                                <datalist id="marginBottomunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                            </div>
                        </div>
                        </div>

                        <div className="content">
                            <div className="option">
                                <div>Padding</div>
                                <div>
                                    <label>Padding-Left</label>
                                    <input type="number" min="0" name="padding-left" />

                                    <input list="paddingLeftunits" placeholder="PX" />
                                    <datalist id="paddingLeftunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Padding-Right</label>
                                    <input type="number" min="0" name="padding-right" />

                                    <input list="paddingRightunits" placeholder="PX" />
                                    <datalist id="paddingRightunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Padding-Top</label>
                                    <input type="number" min="0" name="padding-top" />

                                    <input list="paddingTopunits" placeholder="PX" />
                                    <datalist id="paddingTopunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Padding-Bottom</label>
                                    <input type="number" min="0" name="padding-bottom" />

                                    <input list="paddingBottomunits" placeholder="PX" />
                                    <datalist id="paddingBottomunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                </div>
                            </div>
                        </div>


                        <div className="content">
                            <div className="option">
                                <div>Border</div>
                                <div>
                                    <label>Border-Left</label>
                                    <input type="number" min="0" name="border-left" />

                                    <input list="borderLeftunits" placeholder="PX" />
                                    <datalist id="borderLeftunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Border-Right</label>
                                    <input type="number" min="0" name="border-right" />

                                    <input list="borderRightunits" placeholder="PX" />
                                    <datalist id="borderRightunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Border-Top</label>
                                    <input type="number" min="0" name="border-top" />

                                    <input list="borderTopunits" placeholder="PX" />
                                    <datalist id="borderTopunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Border-Bottom</label>
                                    <input type="number" min="0" name="border-bottom" />

                                    <input list="borderBottomunits" placeholder="PX" />
                                    <datalist id="borderBottomunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Color</label>
                                    <input type="color" name="border-color" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="option-group">
                        <p className="option-group-label">
                            <span className="title">Layout</span>
                            <span className="panel expanded"></span>
                        </p>
                        <div className="content">
                            <div className="option">
                                <label>Display</label>
                                <input list="display" name="display" />

                                <datalist id="display">
                                    <option value="inline" />
                                    <option value="block" />
                                    <option value="inline-block" />
                                    <option value="flex" />
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
                );
            }
        }
        
ReactDOM.render(<Index />, document.getElementById("index"));