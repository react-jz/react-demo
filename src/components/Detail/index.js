import React, { Component} from 'react';
import './index.css';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="s-header">
                <ul className="s-menu">
                	<li>推荐</li>
                	<li>新闻</li>
                	<li>娱乐</li>
                	<li>体育</li>
                	<li>图片</li>
                	<li>财经</li>
                	<li>汽车</li>
                	<li>直播</li>
                	<li>视频</li>
                	<li>美女</li>
                	<li>帅哥</li>
                	<li>电台</li>
                	<li>情感</li>
                	<li>生活</li>
                	<li>两会</li>
                	<li>微博</li>
                	<li>热点</li>
                </ul>
                <div>
                	<img src={require('../../image/1.png')} className="s-pic1"/>
                </div>
                <div className="s-news-title">
                	"赶考"五年成绩非凡"全面从严治党永远在路上"
                </div>
                <div className="s-news-content">
                	<img src={require('../../image/2.png')} className="s-pic2"/>
                	<div className="s-news-contant0">
                		<p className="s-news-contant0-p1"><a href="#">"赶考"五年成绩非凡"全面从严治党永远在路上"</a></p>
                		<p className="s-news-contant0-p2"><span>新闻</span><span>5小时前</span><img src={require('../../image/tushu.svg')} className="s-pic3"/><span>1541</span></p>

                	</div>
                </div>
                <div className="s-news-content">
                	<img src={require('../../image/2.png')} className="s-pic2"/>
                	<div className="s-news-contant0">
                		<p className="s-news-contant0-p1"><a href="#">"赶考"五年成绩非凡"全面从严治党永远在路上"</a></p>
                		<p className="s-news-contant0-p2"><span>新闻</span><span>5小时前</span><img src={require('../../image/tushu.svg')} className="s-pic3"/><span>1541</span></p>

                	</div>
                </div>
                <div className="s-news-content">
                	<img src={require('../../image/2.png')} className="s-pic2"/>
                	<div className="s-news-contant0">
                		<p className="s-news-contant0-p1"><a href="#">"赶考"五年成绩非凡"全面从严治党永远在路上"</a></p>
                		<p className="s-news-contant0-p2"><span>新闻</span><span>5小时前</span><img src={require('../../image/tushu.svg')} className="s-pic3"/><span>1541</span></p>

                	</div>
                </div>
                <div className="s-news-content">
                	<img src={require('../../image/2.png')} className="s-pic2"/>
                	<div className="s-news-contant0">
                		<p className="s-news-contant0-p1"><a href="#">"赶考"五年成绩非凡"全面从严治党永远在路上"</a></p>
                		<p className="s-news-contant0-p2"><span>新闻</span><span>5小时前</span><img src={require('../../image/tushu.svg')} className="s-pic3"/><span>1541</span></p>

                	</div>
                </div>
            </div>
        );
    }
    
}

export default Detail
