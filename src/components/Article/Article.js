import React from 'react'
import './Article.css';
export default class Article extends React.Component {

    // componentDidMount(){
    //     this.setState({
    //         style_image_div:
    //     })
    // }

    render() {
        const div_image = {
            height: this.props.article.multimedia[0].height + 'px',
            // backgroundSize: 'cover',
            width: this.props.article.multimedia[0].width + 'px',
            // overflow: 'hidden',
            backgroundImage: 'url(https://static01.nyt.com/' + this.props.article.multimedia[0].url + ')',
        }
        return (
            <div className='article'>
                <div className='article_info'>
                    <p><h2>{this.props.article.headline.main}</h2></p>
                    <br />
                    <p>{this.props.article.lead_paragraph}</p>
                    <br />
                    <p>{this.props.article.abstract}</p>
                    {/* {this.props.article.keywords.map(keyword => {
                        return (<span>{keyword.value}</span>)
                    })} */}
                    <span className='span_black'>{this.props.article.document_type}</span>
                    <span className='span_black'>{this.props.article.news_desk}</span>
                    <span className='span_black'>{this.props.article.section_name}</span>
                    <span className='span_black'>{this.props.article.type_of_material}</span>
                    <div>
                        <span><b>{this.props.article.byline.original}</b></span>
                        <br/>
                        <button onClick={()=> window.open(`${this.props.article.web_url}`, "_blank")}  className='new_window'>Read More</button>
                    </div>
                </div>
                <div className='image'>
                    <div style={div_image} ></div>
                </div>

            </div>

        )
    }
    // onClickHandler(e){
    //     preventDefault();
    // }
}