<template>
    <div class="main">
        <svg class="guideLine" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 783 500">
            <image x="5%" y="20" :xlink:href="$images.center" width="90%" height="100%"/>
            <image v-if='!status' x="250" y="320" :style="{opacity: number}" :xlink:href="$images.normal_bg" width="250"
                   height="170"/>
            <image v-else id="textBox_1" x="220" y="110" :xlink:href="$images.sensitive_bg" width="300" height="170"/>
            <template v-if="isIE">
                <g class="title_1" id="title_1" @mouseenter="onmouseenter" @mouseleave="onmouseleave">
                    <image class="bg_img" x="85" y="354"
                           :xlink:href="psychologicalStatus?$images.sensitive_title:$images.normal_title" width="130"
                           height="50"/>
                    <text x="120" y="380" fill="#fff">
                        心理特征
                    </text>
                    <!--                <polyline points="0,5.6 15,5.6 2.5,15 7.5,0 12.5,15 0,5.6" fill-opacity="0.7" fill="red"></polyline>-->
                    <polyline points="110,389 124.5,389 112.5,398 117.5,384 122,398 110,389" fill-opacity="0.8"
                              :fill="psychologicalRate>=1?'#FED723':'#fff'"></polyline>
                    <polyline points="128,389 141.5,389 130.5,398 134.8,384 139,398 128,389" fill-opacity="0.8"
                              :fill="psychologicalRate>=2?'#FED723':'#fff'"></polyline>
                    <polyline points="144,389 157.5,389 146.5,398 150.8,384 155,398 144,389" fill-opacity="0.8"
                              :fill="psychologicalRate>=3?'#FED723':'#fff'"></polyline>
                    <polyline points="160,389 173.5,389 162.5,398 166.8,384 171,398 160,389" fill-opacity="0.8"
                              :fill="psychologicalRate>=4?'#FED723':'#fff'"></polyline>
                    <polyline points="177,389 190.5,389 179.5,398 183.8,384 189,398 177,389" fill-opacity="0.8"
                              :fill="psychologicalRate>=5?'#FED723':'#fff'"></polyline>
                </g>
                <g class="text promptTitle" ref="text_1">
                    <text x="340" y="345" fill='#fff' style="font-size: 18px;font-weight: 600">
                        心理特征
                    </text>
                    <template v-if="!showPsychology">
                        <text x="330" y="410" fill='#AFE5FB' style="font-size: 16px;">
                            {{ psychology }}
                        </text>
                    </template>
                    <template v-else>
                        <text fill='#AFE5FB' x="270" y="375" style="font-size: 16px;">
                            <tspan fill="#FED723">{{ psychology }}人</tspan>
                            (
                            <tspan>{{ psychologyPercent }}</tspan>
                            )心理特征需关注
                        </text>
                        <text fill='#AFE5FB' x="270" y="405" style="font-size: 16px;">
                            情绪消极，需关注心理健康
                        </text>
                    </template>
                    <path id='line_1' class='swap1' d="M150,402 L150,432 250,432" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g class="title_1" id="title_2" @mouseenter="onmouseenter"  @mouseleave="onmouseleave">
                    <image class="bg_img" x="58" y="224"
                           :xlink:href="speechStatus?$images.sensitive_title:$images.normal_title" width="130"
                           height="50"/>
                    <text x="95" y="250" fill="#fff">
                        言论特征
                    </text>
                    <polyline points="85,260 98.5,260 87.5,269 91.5,255 96,269 85,260" fill-opacity="0.8"
                              :fill="speechRate>=1?'#FED723':'#fff'"></polyline>
                    <polyline points="103,260 116.5,260 105.5,269 109.5,255 114,269 103,260" fill-opacity="0.8"
                              :fill="speechRate>=2?'#FED723':'#fff'"></polyline>
                    <polyline points="119,260 132.5,260 121.5,269 125.5,255 130,269 119,260" fill-opacity="0.8"
                              :fill="speechRate>=3?'#FED723':'#fff'"></polyline>
                    <polyline points="135,260 148.5,260 137.5,269 141.5,255 146,269 135,260" fill-opacity="0.8"
                              :fill="speechRate>=4?'#FED723':'#fff'"></polyline>
                    <polyline points="152,260 165.5,260 154.5,269 158.5,255 163,269 152,260" fill-opacity="0.8"
                              :fill="speechRate>=5?'#FED723':'#fff'"></polyline>
                </g>
                <g class="text" ref="text_2">
                    <text x="340" y="345" fill='#fff' style="font-size: 18px;font-weight: 600">
                        言论特征
                    </text>
                    <template v-if="!showSpeech">
                        <text x="345" y="410" fill='#AFE5FB' style="font-size: 16px;">
                            {{ speech }}
                        </text>
                    </template>
                    <template v-else>
                        <text fill='#AFE5FB' x="270" y="375">
                            <tspan fill="#FED723">{{ speech }}人</tspan>
                            (
                            <tspan>{{ speechPercent }}</tspan>
                            )言论特征需关注
                        </text>
                        <text x="270" y="405" fill='#AFE5FB' v-if="showBisexual">需关注两性健康</text>
                        <text x="270" :y="showBisexual?435:405" fill='#AFE5FB' v-if="showViolate">需关注违禁行为</text>
                        <text x="270" :y="(showBisexual && showViolate)?465:(showBisexual || showViolate)?435:405"
                              fill='#AFE5FB' v-if="showIdeology">需关注思想健康
                        </text>
                    </template>
                    <text fill='#fff'>

                    </text>
                    <path id='line_2' class='swap2' d="M125,272 L125,337 250,337" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g class="title_1" id="title_3" @mouseenter="onmouseenter" @mouseleave="onmouseleave">
                    <image class="bg_img" x="87" y="110"
                           :xlink:href="internetPreferenceStatus?$images.sensitive_title:$images.normal_title"
                           width="130" height="50"/>
                    <text x="120" y="135" fill="#fff">
                        上网偏好
                    </text>
                    <polyline points="110,145 123.5,145 112.5,154 116.5,140 121,154 110,145" fill-opacity="0.8"
                              :fill="internetPreferenceRate>=1?'#FED723':'#fff'"></polyline>
                    <polyline points="128,145 141.5,145 130.5,154 134.5,140 139,154 128,145" fill-opacity="0.8"
                              :fill="internetPreferenceRate>=2?'#FED723':'#fff'"></polyline>
                    <polyline points="144,145 157.5,145 146.5,154 150.5,140 155,154 144,145" fill-opacity="0.8"
                              :fill="internetPreferenceRate>=3?'#FED723':'#fff'"></polyline>
                    <polyline points="160,145 173.5,145 162.5,154 166.5,140 171,154 160,145" fill-opacity="0.8"
                              :fill="internetPreferenceRate>=4?'#FED723':'#fff'"></polyline>
                    <polyline points="177,145 190.5,145 179.5,154 183.5,140 188,154 177,145" fill-opacity="0.8"
                              :fill="internetPreferenceRate>=5?'#FED723':'#fff'"></polyline>
                </g>
                <g class="text" ref="text_3">
                    <text x="340" y="345" fill='#fff' style="font-size: 18px;font-weight: 600">
                        上网偏好
                    </text>
                    <text fill='#AFE5FB' x="270" y="375">
                        <tspan fill="#FED723">{{ internetPreference }}人</tspan>
                        (
                        <tspan>{{ internetPreferencePercent }}</tspan>
                        ){{ showInternetPreference ? '上网访问存在风险' : '上网访问无风险' }}
                    </text>
                    <text v-for="(item,index) in internetPreferenceUrl" :key="item" x="270" fill="#AFE5FB" :y="405+index*30">
                        {{ item }}
                    </text>
                    <path id='line_3' class='swap3' d="M207,135 L260,135 260,322" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g class="title_1" id="title_4" @mouseenter="onmouseenter" @mouseleave="onmouseleave">
                    <image class="bg_img" x="310" y="40"
                           :xlink:href="riskStatus?$images.sensitive_title:$images.normal_title" width="130"
                           height="50"/>
                    <text x="343" y="65" fill="#fff">
                        合规状态
                    </text>
                    <polyline points="333,75 346.5,75 335.5,84 339.5,70 344,84 333,75" fill-opacity="0.8"
                              :fill="riskRate>=1?'#FED723':'#fff'"></polyline>
                    <polyline points="351,75 364.5,75 353.5,84 357.5,70 362,84 351,75" fill-opacity="0.8"
                              :fill="riskRate>=2?'#FED723':'#fff'"></polyline>
                    <polyline points="367,75 380.5,75 369.5,84 373.5,70 378,84 367,75" fill-opacity="0.8"
                              :fill="riskRate>=3?'#FED723':'#fff'"></polyline>
                    <polyline points="383,75 396.5,75 385.5,84 389.5,70 394,84 383,75" fill-opacity="0.8"
                              :fill="riskRate>=4?'#FED723':'#fff'"></polyline>
                    <polyline points="400,75 413.5,75 402.5,84 406.5,70 411,84 400,75" fill-opacity="0.8"
                              :fill="riskRate>=5?'#FED723':'#fff'"></polyline>
                </g>
                <g class="text" ref="text_4">
                    <text x="340" y="345" fill='#fff' style="font-size: 18px;font-weight: 600">
                        合规状态
                    </text>
                    <template v-if="!showRisk">
                        <text x="280" y="410" fill='#AFE5FB' style="font-size: 16px">
                            {{ risk }}
                        </text>
                    </template>
                    <template v-else>
                        <text fill='#AFE5FB' x="270" y="375">
                            <tspan fill="#FED723">{{ risk }}人</tspan>
                            (
                            <tspan>{{ riskPercent }}</tspan>
                            )触发风险意识
                        </text>
                        <text x="270" y="405" fill='#AFE5FB' v-if="existViolations">警惕设备违规风险</text>
                        <text x="270" :y="existViolations?435:405" fill='#AFE5FB' v-if="existOutOfControl">警惕设备脱离管控风险
                        </text>
                        <text x="270"
                              :y="(existViolations && existOutOfControl)?465:(existViolations || existOutOfControl)?435:405"
                              fill='#AFE5FB' v-if="existRoot">警惕设备被破解风险
                        </text>
                    </template>
                    <path id='line_4' class='swap4' d="M319,66 L279,66 279,321" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g class="title_1" id="title_5" @mouseenter="onmouseenter" @mouseleave="onmouseleave">
                    <image class="bg_img" x="530" y="110"
                           :xlink:href="entertainmentPreferenceStatus?$images.sensitive_title:$images.normal_title"
                           width="130" height="50"/>
                    <text x="550" y="135" fill="#fff">
                        娱乐作息偏好
                    </text>
                    <polyline points="562,145 570.5,145 559.5,154 563.5,140 568,154 557,145" fill-opacity="0.8"
                              :fill="entertainmentPreferenceRate>=1?'#FED723':'#fff'"></polyline>
                    <polyline points="573,145 585.5,145 575.5,154 579.5,140 584,154 573,145" fill-opacity="0.8"
                              :fill="entertainmentPreferenceRate>=2?'#FED723':'#fff'"></polyline>
                    <polyline points="589,145 602.5,145 591.5,154 595.5,140 600,154 589,145" fill-opacity="0.8"
                              :fill="entertainmentPreferenceRate>=3?'#FED723':'#fff'"></polyline>
                    <polyline points="605,145 618.5,145 607.5,154 611.5,140 616,154 605,145" fill-opacity="0.8"
                              :fill="entertainmentPreferenceRate>=4?'#FED723':'#fff'"></polyline>
                    <polyline points="622,145 635.5,145 624.5,154 628.5,140 633,154 622,145" fill-opacity="0.8"
                              :fill="entertainmentPreferenceRate>=5?'#FED723':'#fff'"></polyline>
                </g>
                <g class="text" ref="text_5">
                    <text x="325" y="345" fill='#fff' style="font-size: 18px;font-weight: 600">
                        娱乐作息偏好
                    </text>
                    <template v-if="!showEntertainmentPreference">
                        <text x="330" y="410" fill='#AFE5FB' style="font-size: 16px">
                            {{ entertainmentPreference }}
                        </text>
                    </template>
                    <template v-else>
                        <text fill='#AFE5FB' x="270" y="375">
                            <tspan fill="#FED723">{{ entertainmentPreference }}人</tspan>
                            (
                            <tspan>{{ entertainmentPreferencePercent }}</tspan>
                            )作息规律/作息需关注
                        </text>
                        <text x="270" y="405" fill='#AFE5FB'>{{ entertainmentPreferenceContent }}</text>
                    </template>
                    <path id='line_5' class='swap3' d="M538,135 L485,135 485,322" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g class="title_1" id="title_6" @mouseenter="onmouseenter" @mouseleave="onmouseleave">
                    <image class="bg_img" x="560" y="224"
                           :xlink:href="makeFriendStatus?$images.sensitive_title:$images.normal_title" width="130"
                           height="50"/>
                    <text x="598" y="250" fill="#fff">
                        社交偏好
                    </text>
                    <polyline points="588,260 601.5,260 590.5,269 594.5,255 599,269 588,260" fill-opacity="0.8"
                              :fill="makeFriendRate>=1?'#FED723':'#fff'"></polyline>
                    <polyline points="606,260 619.5,260 608.5,269 612.5,255 617,269 606,260" fill-opacity="0.8"
                              :fill="makeFriendRate>=2?'#FED723':'#fff'"></polyline>
                    <polyline points="622,260 635.5,260 624.5,269 628.5,255 633,269 622,260" fill-opacity="0.8"
                              :fill="makeFriendRate>=3?'#FED723':'#fff'"></polyline>
                    <polyline points="638,260 651.5,260 640.5,269 644.5,255 649,269 638,260" fill-opacity="0.8"
                              :fill="makeFriendRate>=4?'#FED723':'#fff'"></polyline>
                    <polyline points="655,260 668.5,260 657.5,269 661.5,255 666,269 655,260" fill-opacity="0.8"
                              :fill="makeFriendRate>=5?'#FED723':'#fff'"></polyline>
                </g>
                <g class="text" ref="text_6">
                    <text x="340" y="345" fill='#fff' style="font-size: 18px;font-weight: 600">
                        社交偏好
                    </text>
                    <template v-if="!showMakeFriend">
                        <text x="330" y="410" fill='#AFE5FB' style="font-size: 16px">
                            {{ makeFriend }}
                        </text>
                    </template>
                    <template v-else>
                        <text fill='#AFE5FB' x="270" y="375">
                            <tspan fill="#FED723">{{ makeFriend }}人</tspan>
                            (
                            <tspan>{{ makeFriendPercent }}</tspan>
                            )人际关系复杂
                        </text>
                        <text x="270" y="405" fill='#AFE5FB'>人际关系较复杂，需关注陌生人交友问题</text>
                    </template>
                    <path id='line_6' class='swap2' d="M625,272 L625,337 500,337" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g class="title_1" id="title_7" @mouseenter="onmouseenter" @mouseleave="onmouseleave">
                    <image class="bg_img" x="538" y="354"
                           :xlink:href="consumptionCharacteristicsStatus?$images.sensitive_title:$images.normal_title"
                           width="130" height="50"/>
                    <text x="575" y="380" fill="#fff">
                        消费特征
                    </text>
                    <polyline points="565,390 578.5,390 567.5,399 571.5,385 576,399 565,390" fill-opacity="0.8"
                              :fill="consumptionCharacteristicsRate>=1?'#FED723':'#fff'"></polyline>
                    <polyline points="583,390 596.5,390 585.5,399 589.5,385 594,399 583,390" fill-opacity="0.8"
                              :fill="consumptionCharacteristicsRate>=2?'#FED723':'#fff'"></polyline>
                    <polyline points="599,390 612.5,390 601.5,399 605.5,385 610,399 599,390" fill-opacity="0.8"
                              :fill="consumptionCharacteristicsRate>=3?'#FED723':'#fff'"></polyline>
                    <polyline points="615,390 628.5,390 617.5,399 621.5,385 626,399 615,390" fill-opacity="0.8"
                              :fill="consumptionCharacteristicsRate>=4?'#FED723':'#fff'"></polyline>
                    <polyline points="632,390 645.5,390 634.5,399 638.5,385 643,399 632,390" fill-opacity="0.8"
                              :fill="consumptionCharacteristicsRate>=5?'#FED723':'#fff'"></polyline>
                </g>
                <g class="text" ref="text_7">
                    <text x="340" y="345" fill='#fff' style="font-size: 18px;font-weight: 600">
                        消费特征
                    </text>
                    <template v-if="!showConsumptionCharacteristics">
                        <text x="280" y="410" fill='#AFE5FB' style="font-size: 16px">
                            {{ consumptionCharacteristics }}
                        </text>
                    </template>
                    <template v-else>
                        <text fill='#AFE5FB' x="270" y="375">
                            <tspan fill="#FED723">{{ consumptionCharacteristics }}人</tspan>
                            (
                            <tspan>{{ consumptionCharacteristicsPercent }}</tspan>
                            )具有高风险消费
                        </text>
                        <text x="270" y="405" fill='#AFE5FB'>资金波动明显，需警惕高风险消费</text>
                    </template>
                    <path id='line_7' class='swap1' d="M600,402 L600,432 500,432" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
            </template>
            <template v-else>
                <g>
                    <image class="bg_img" x="85" y="354"
                           :xlink:href="psychologicalStatus?$images.sensitive_title:$images.normal_title" width="130"
                           height="50"/>
                    <foreignObject class="title_1" @mouseenter="onmouseenter" @mouseleave="onmouseleave" x="102" y="364" id="title_1" width="100" height="40">
                        <div class="title-text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <p :style="{color:psychologicalStatus?'#FFDBDB':''}">
                                <span class="titleText">心理特征</span>
                                <Rate :show-text="false" disabled v-model="psychologicalRate"></Rate>
                            </p>
                        </div>
                    </foreignObject>
                    <foreignObject class="text" x="250" y="320" ref="text_1" width="250" height="170">
                        <div class="text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <div class="promptBox">
                                <div class="promptTitle">心理特征</div>
                                <p v-if="!showPsychology" style="text-align: center;margin-top: 40px;">
                                    {{ psychology }}
                                </p>
                                <div class="psychologyContent" v-else>
                                    <div><span>{{ psychology }}人</span>(<span>{{ psychologyPercent }}</span>)心理特征需关注
                                    </div>
                                    <div>情绪消极，需关注心理健康</div>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <path id='line_1' class='swap1' d="M150,402 L150,432 250,432" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g>
                    <image class="bg_img" x="58" y="224"
                           :xlink:href="speechStatus?$images.sensitive_title:$images.normal_title" width="130"
                           height="50"/>
                    <foreignObject class="title_1" @mouseenter="onmouseenter" @mouseleave="onmouseleave" x="76" y="232" id="title_2" width="100" height="40">
                        <div class="title-text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <p :style="{color:speechStatus?'#FFDBDB':''}">
                                <span class="titleText">言论特征</span>
                                <Rate :show-text="false" disabled v-model="speechRate"></Rate>
                            </p>
                        </div>
                    </foreignObject>
                    <foreignObject class="text" x="250" y="320" ref="text_2" width="250" height="170">
                        <div class="text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <div class="promptBox">
                                <div class="promptTitle">言论特征</div>
                                <p v-if="!showSpeech" style="text-align: center;margin-top: 40px;">
                                    {{ speech }}
                                </p>
                                <div class="psychologyContent" v-else>
                                    <div><span>{{ speech }}人</span>(<span>{{ speechPercent }}</span>)言论特征需关注</div>
                                    <div v-if="showBisexual">需关注两性健康</div>
                                    <div v-if="showViolate">需关注违禁行为</div>
                                    <div v-if="showIdeology">需关注思想健康</div>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <path id='line_2' class='swap2' d="M125,272 L125,337 250,337" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g>
                    <image class="bg_img" x="87" y="110"
                           :xlink:href="internetPreferenceStatus?$images.sensitive_title:$images.normal_title"
                           width="130" height="50"/>
                    <foreignObject class="title_1" @mouseenter="onmouseenter" @mouseleave="onmouseleave" x="105" y="118" id="title_3" width="100" height="40">
                        <div class="title-text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <p :style="{color:internetPreferenceStatus?'#FFDBDB':''}">
                                <span class="titleText">上网偏好</span>
                                <Rate :show-text="false" disabled v-model="internetPreferenceRate">
                                </Rate>
                            </p>
                        </div>
                    </foreignObject>
                    <foreignObject class="text" x="250" y="320" ref="text_3" width="250" height="170">
                        <div class="text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <div class="promptBox">
                                <div class="promptTitle">上网偏好</div>
                                <div class="psychologyContent">
                                    <div>
                                        <span>{{ internetPreference }}人</span>(<span>{{ internetPreferencePercent }}</span>){{ showInternetPreference ? '上网访问存在风险' : '上网访问无风险' }}
                                    </div>
                                    <div v-for="item in internetPreferenceUrl" :key="item">{{ item }}</div>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <path id='line_3' class='swap3' d="M207,135 L260,135 260,322" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g>
                    <image class="bg_img" x="310" y="40"
                           :xlink:href="riskStatus?$images.sensitive_title:$images.normal_title" width="130"
                           height="50"/>
                    <foreignObject class="title_1" @mouseenter="onmouseenter" @mouseleave="onmouseleave" x="328" y="49" id="title_4" width="100" height="40">
                        <div class="title-text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <p :style="{color:riskStatus?'#FFDBDB':''}">
                                <span class="titleText">合规状态</span>
                                <Rate :show-text="false" disabled v-model="riskRate">
                                </Rate>
                            </p>
                        </div>
                    </foreignObject>
                    <foreignObject class="text" x="250" y="320" ref="text_4" width="250" height="170">
                        <div class="text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <div class="promptBox">
                                <div class="promptTitle">合规状态</div>
                                <p v-if="!showRisk" style="text-align: center;margin-top: 40px;">
                                    {{ risk }}
                                </p>
                                <div class="psychologyContent" v-else>
                                    <div><span>{{ risk }}人</span>(<span>{{ riskPercent }}</span>)触发风险意识</div>
                                    <div v-if="existViolations">警惕设备违规风险</div>
                                    <div v-if="existOutOfControl">警惕设备脱离管控风险</div>
                                    <div v-if="existRoot">警惕设备被破解风险</div>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <path id='line_4' class='swap4' d="M319,66 L279,66 279,321" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g>
                    <image class="bg_img" x="530" y="110"
                           :xlink:href="entertainmentPreferenceStatus?$images.sensitive_title:$images.normal_title"
                           width="130" height="50"/>
                    <foreignObject class="title_1" @mouseenter="onmouseenter" @mouseleave="onmouseleave" x="538" y="118" id="title_5" width="120" height="40">
                        <div class="title-text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <p :style="{color:entertainmentPreferenceStatus?'#FFDBDB':''}">
                                <span style="font-size: 15px;display: block;">娱乐作息偏好</span>
                                <Rate :show-text="false" disabled v-model="entertainmentPreferenceRate"
                                      class="entertainment">
                                </Rate>
                            </p>
                        </div>
                    </foreignObject>
                    <foreignObject class="text" x="250" y="320" ref="text_5" width="250" height="170">
                        <div class="text-box" xmlns="http://www.w3.org/1999/xhtml">

                            <div class="promptBox">
                                <div class="promptTitle">娱乐作息偏好</div>
                                <p v-if="!showEntertainmentPreference" style="text-align: center;margin-top: 40px;">
                                    {{ entertainmentPreference }}
                                </p>
                                <div class="psychologyContent" v-else>
                                    <div>
                                        <span>{{ entertainmentPreference }}人</span>(<span>{{ entertainmentPreferencePercent }}</span>)作息规律/作息需关注
                                    </div>
                                    <div>{{ entertainmentPreferenceContent }}</div>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <path id='line_5' class='swap3' d="M538,135 L485,135 485,322" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g>
                    <image class="bg_img" x="560" y="224"
                           :xlink:href="makeFriendStatus?$images.sensitive_title:$images.normal_title" width="130"
                           height="50"/>
                    <foreignObject class="title_1" @mouseenter="onmouseenter" @mouseleave="onmouseleave" x="578" y="232" id="title_6" width="100" height="40">
                        <div class="title-text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <p :style="{color:makeFriendStatus?'#FFDBDB':''}">
                                <span class="titleText">社交偏好</span>
                                <Rate :show-text="false" disabled v-model="makeFriendRate">
                                </Rate>
                            </p>
                        </div>
                    </foreignObject>
                    <foreignObject class="text" x="250" y="320" ref="text_6" width="250" height="170">
                        <div class="text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <div class="promptBox">
                                <div class="promptTitle">社交偏好</div>
                                <p v-if="!showMakeFriend" style="text-align: center;margin-top: 40px;">
                                    {{ makeFriend }}
                                </p>
                                <div class="psychologyContent" v-else>
                                    <div><span>{{ makeFriend }}人</span>(<span>{{ makeFriendPercent }}</span>)人际关系复杂
                                    </div>
                                    <div>人际关系较复杂，需关注陌生人交友问题</div>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <path id='line_6' class='swap2' d="M625,272 L625,337 500,337" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
                <g>
                    <image class="bg_img" x="538" y="354"
                           :xlink:href="consumptionCharacteristicsStatus?$images.sensitive_title:$images.normal_title"
                           width="130" height="50"/>
                    <foreignObject class="title_1" @mouseenter="onmouseenter" @mouseleave="onmouseleave" x="555" y="364" id="title_7" width="100" height="40">
                        <div class="title-text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <p :style="{color:consumptionCharacteristicsStatus?'#FFDBDB':''}">
                                <span class="titleText">消费特征</span>
                                <Rate :show-text="false" disabled v-model="consumptionCharacteristicsRate">

                                </Rate>
                            </p>
                        </div>
                    </foreignObject>
                    <foreignObject class="text" x="250" y="320" ref="text_7" width="250" height="170">
                        <div class="text-box" xmlns="http://www.w3.org/1999/xhtml">
                            <div class="promptBox">
                                <div class="promptTitle">消费特征</div>
                                <p v-if="!showConsumptionCharacteristics" style="text-align: center;margin-top: 40px;">
                                    {{ consumptionCharacteristics }}
                                </p>
                                <div class="psychologyContent" v-else>
                                    <div>
                                        <span>{{ consumptionCharacteristics }}人</span>(<span>{{ consumptionCharacteristicsPercent }}</span>)具有高风险消费
                                    </div>
                                    <div>资金波动明显，需警惕高风险消费</div>
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                    <path id='line_7' class='swap1' d="M600,402 L600,432 500,432" stroke="#AFE5FB" stroke-width="2"
                          fill="none"/>
                </g>
            </template>
        </svg>

    </div>
</template>

<script>

export default {
    name: '',
    props: {
        selectRangeDate: Array,
        _width: Number
    },
    data() {
        return {
            psychology: '',
            showPsychology: false,
            psychologyPercent: '',
            speech: "",
            showSpeech: false,
            speechPercent: '',
            showBisexual: false,
            showViolate: false,
            showIdeology: false,
            risk: '',
            showRisk: false,
            riskPercent: '',
            existOutOfControl: false,
            existRoot: false,
            existViolations: false,
            makeFriend: '',
            showMakeFriend: false,
            makeFriendPercent: '',
            timer1: null,
            entertainmentPreference: '',
            showEntertainmentPreference: false,
            entertainmentPreferencePercent: '',
            entertainmentPreferenceContent: '',
            internetPreference: '',
            showInternetPreference: false,
            internetPreferencePercent: '',
            internetPreferenceUrl: [],
            consumptionCharacteristics: '',
            showConsumptionCharacteristics: false,
            consumptionCharacteristicsPercent: '',
            status: false,
            timer: null,
            rid: null,
            index: 0,
            number: 0,
            length: 0,
            frames: 0,
            isIE: false,
            psychologicalRate: 0,
            speechRate: 0,
            internetPreferenceRate: 0,
            riskRate: 0,
            makeFriendRate: 0,
            entertainmentPreferenceRate: 0,
            consumptionCharacteristicsRate: 0,
            psychologicalStatus: false,
            speechStatus: false,
            internetPreferenceStatus: false,
            riskStatus: false,
            entertainmentPreferenceStatus: false,
            makeFriendStatus: false,
            consumptionCharacteristicsStatus: false,
            lineType: 'psychological'
        }
    },
    methods: {
        // mouseenter
        onmouseenter(e) {
            document.querySelectorAll('.text').forEach(item=>item.style.opacity = 0);
            document.querySelectorAll('.swap1').forEach(item=>item.style.strokeDashoffset = 130);
            document.querySelectorAll('.swap2').forEach(item=>item.style.strokeDashoffset = 190);
            document.querySelectorAll('.swap3').forEach(item=>item.style.strokeDashoffset = 240);
            document.querySelectorAll('.swap4').forEach(item=>item.style.strokeDashoffset = 295);
            cancelAnimationFrame(this.rid);
            this.rid = null;
            clearTimeout(this.timer)
            this.timer = null;
            this.animation(Number(e.currentTarget.id.substr(e.currentTarget.id.length - 1, 1)), true);
        },
        //mouseleave
        onmouseleave() {
            this.animation(1, false);
        },
        frame() {
            cancelAnimationFrame(this.rid);
            this.rid = null;
            this.rid = requestAnimationFrame(this.frame);
            let line = document.querySelector("#line_" + this.index);
            line.style.strokeDashoffset = this.frames;
            line.getPointAtLength(this.length - this.frames);
            line.getPointAtLength((this.length - this.frames + 2) % this.length);
            if (this.index > 1) {
                line = document.querySelector("#line_" + (this.index - 1));
                this.$refs["text_" + (this.index - 1)].style.opacity = 0;
                line.style.strokeDashoffset = line.style.strokeDasharray;
            }
            if (this.index == 1) {
                for (let i = 2; i < 8; i++) {
                    line = document.querySelector("#line_" + i);
                    this.$refs["text_" + i].style.opacity = 0;
                    line.style.strokeDashoffset = line.style.strokeDasharray;

                }
            }
            this.$refs["text_" + this.index].style.opacity = this.number;
            this.number += 5 / this.length;
            this.frames -= 5;
            if (this.frames <= -5) {
                cancelAnimationFrame(this.rid);
                this.rid = null;
            }
        },
        animation(i, boolean) {
            clearTimeout(this.timer);
            cancelAnimationFrame(this.rid);
            this.rid = null;
            this.timer = null;
            if (i > 7) {
                i = 1;
            }
            this.psychologicalStatus = false;
            this.speechStatus = false
            this.internetPreferenceStatus = false
            this.riskStatus = false
            this.entertainmentPreferenceStatus = false
            this.makeFriendStatus = false
            this.consumptionCharacteristicsStatus = false
            switch (i) {
                case 1:
                    this.psychologicalStatus = true;
                    this.lineType = 'psychological'
                    break;
                case 2:
                    this.speechStatus = true;
                    this.lineType = 'speech'
                    break;
                case 3:
                    this.internetPreferenceStatus = true;
                    this.lineType = 'internet'
                    break;
                case 4:
                    this.riskStatus = true;
                    this.lineType = 'risk'
                    break;
                case 5:
                    this.entertainmentPreferenceStatus = true;
                    this.lineType = 'entertainment'
                    break;
                case 6:
                    this.makeFriendStatus = true;
                    this.lineType = 'social'
                    break;
                case 7:
                    this.consumptionCharacteristicsStatus = true;
                    this.lineType = 'consumption'
                    break;
                default:
                    break
            }
            const line = document.querySelector("#line_" + i);
            this.length = line.getTotalLength();
            line.style.strokeDasharray = this.length;
            line.style.strokeDashoffset = this.length;
            this.frames = this.length;
            this.index = i;
            this.number = 0;
            this.frame();
            if (boolean) {
                return
            } else {
                clearTimeout(this.timer);
                this.timer = null;
                this.timer = setTimeout(() => {
                    this.animation(i + 1, boolean);
                }, 5000);
            }
        },
        // 中心图
        setChart() {
            clearTimeout(this.timer1);
            clearTimeout(this.timer);
            cancelAnimationFrame(this.rid);
            this.frames = 0;
            this.rid = null;
            this.timer = null;
            this.timer1 = null
            this.timer1 = setTimeout(() => {
                this.animation(1, false);
            }, 10000);

        }
    },
    watch: {
        selectRangeDate: function () {
            this.setChart()
        }
    },
    created() {
        if (!window.SVGForeignObjectElement) {
            this.isIE = true;
        }
    },
    beforeDestroy() { // 离开页面动画初始化
        document.querySelectorAll('.text').forEach(item=>item.style.opacity = 0);
        document.querySelectorAll('.swap1').forEach(item=>item.style.strokeDashoffset = 130);
        document.querySelectorAll('.swap2').forEach(item=>item.style.strokeDashoffset = 190);
        document.querySelectorAll('.swap3').forEach(item=>item.style.strokeDashoffset = 240);
        document.querySelectorAll('.swap4').forEach(item=>item.style.strokeDashoffset = 295);
        cancelAnimationFrame(this.rid);
        this.rid = null;
        clearTimeout(this.timer)
        clearTimeout(this.timer1)
        this.timer = null;
        this.timer1 = null;
        this.psychologicalStatus = false;
        this.speechStatus = false
        this.internetPreferenceStatus = false
        this.riskStatus = false
        this.entertainmentPreferenceStatus = false
        this.makeFriendStatus = false
        this.consumptionCharacteristicsStatus = false
    },
    mounted() {
        this.setChart();
    }
}
</script>


<style lang="less" scoped>
.main {
    width: 100%;
    height: 100%;
    position: relative;

    .guideLine {
        width: 100%;
        height: 100%;

        #textBox_1 {
            opacity: 0;
        }

        .title_1 {
            font-size: 15px;
            cursor: pointer;

            .title-text-box {
                background: rgba(0, 0, 0, 0);
                justify-content: center; //子元素水平居中
                align-items: center; //子元素垂直居中
                display: -webkit-flex;
                height: 100%;

                p {
                    width: 100%;
                    background: rgba(0, 0, 0, 0);
                    color: #A0E8FF;
                    font-size: 15px;
                    text-align: center;

                    .titleText {
                        margin-left: -5px;
                        font-size: 15px;
                        display: block;
                    }

                    /deep/ .ivu-rate {
                        font-size: 14px;

                        .ivu-rate-star {
                            margin-right: 6px;
                        }
                    }

                }
            }
        }

        .text {
            opacity: 0;
            color: #fff;
            font-size: 15px;
            text-align: center;

            .text-box {
                background: rgba(0, 0, 0, 0);
                justify-content: center; //子元素水平居中
                align-items: center; //子元素垂直居中
                display: -webkit-flex;

                .promptBox {
                    width: 100%;
                    height: 100%;
                    padding: 10px 20px;

                    .promptTitle {
                        color: #fff;
                        font-size: 16px;
                        font-weight: bold;
                        margin-bottom: 5px;
                    }

                    p {
                        background: rgba(0, 0, 0, 0);
                        color: #A0E8FF;
                        font-size: 16px;
                        text-align: left;
                    }
                }

                .psychologyContent {
                    color: #AFE5FB;
                    font-size: 16px;
                    text-align: left;

                    div {
                        line-height: 2em;

                        span {
                            &:first-child {
                                color: #FED723;
                                cursor: pointer;
                            }
                        }
                    }
                }

            }
        }

        .swap1 {
            stroke-dasharray: 130;
            stroke-dashoffset: 130;
        }

        .swap2 {
            stroke-dasharray: 190;
            stroke-dashoffset: 190;
        }

        .swap3 {
            stroke-dasharray: 240;
            stroke-dashoffset: 240;
        }

        .swap4 {
            stroke-dasharray: 295;
            stroke-dashoffset: 295;
        }

        .circle-point {
            &:hover {
                fill: #000;
            }
        }

        // .swap4{
        // stroke-dasharray: 110;
        // stroke-dashoffset: 110;
        // }
    }
}
</style>
