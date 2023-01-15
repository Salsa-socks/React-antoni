//multiple imports of instances of hoverplayer
import {Videodata1,  Videodata2, Videodata3, Videodata4, Videodata5,
    Videodata6, Videodata7, Videodata8, Videodata9, Videodata10,
    Videodata11, Videodata12,} from './Videodata';
import './Slideshowstyle.css';
// sidescrolling function below cause overflow-x-scroll class doesnt work
import { useHorizontalScroll } from './Sidescroll';

// CHanged SLideshow from class to function to allow react hook - cannot be called in a class component"
// occurs when we try to use the useState hook in a class component.
// To solve the error, convert your class to a function

export default function Slideshow() {
    // sidescroll function changes scroll direction 
    const scrollRef = useHorizontalScroll();
        return (
                <div id='slideline' ref={scrollRef}  data-carousel="static">
                   {/* Slider container contains div that resizes video to 37% of screen. slider aligns
                   them and is supposed to get scroll function but scrollRef does that */}
                    <div id='slider'>
                        <div id='vidcontainer'>
                            {/* placed hoverplayer instances into <videodata> funcs , listed video data and captions in order
                            to have headings scroll with video  */}
                        <div id='containflexer'>
                            <ul>
                                <li>
                                    <Videodata1/>
                                </li>
                                <li>
                                <h1>heading1</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata2/>
                                </li>
                                <li>
                                <h1>heading2</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata3/>
                                </li>
                                <li>
                                <h1>heading3</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata4/>
                                </li>
                                <li>
                                <h1>heading4</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata5/>
                                </li>
                                <li>
                                <h1>heading5</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata6/>
                                </li>
                                <li>
                                <h1>heading6</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata7/>
                                </li>
                                <li>
                                <h1>heading7</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata8/>
                                </li>
                                <li>
                                <h1>heading8</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata9/>
                                </li>
                                <li>
                                <h1>heading9</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata10/>
                                </li>
                                <li>
                                <h1>heading10</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata11/>
                                </li>
                                <li>
                                <h1>heading11</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Videodata12/>
                                </li>
                                <li>
                                <h1>heading12</h1>
                                </li>
                                <li>
                                <h2>subheadng</h2>
                                </li>
                            </ul>
                        </div>
                       
                        </div>
                    </div>
                </div>
        );
    }
