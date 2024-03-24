import {Component} from 'react'
import Btns from '../btns'
import './index.css'

class View extends Component {
  state = {activeLangId: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0'}

  changeLang = id => {
    this.setState({activeLangId: id})
  }

  render() {
    const {list} = this.props
    const {activeLangId} = this.state
    const activeLang = list.filter(item => item.id === activeLangId)
    const {imageUrl, imageAltText} = activeLang[0]
    return (
      <div className="bg">
        <h1>Multilingual Greetings</h1>
        <ul>
          {list.map(each => (
            <Btns
              key={each.id}
              each={each}
              activeLangId={activeLangId}
              changeLang={this.changeLang}
            />
          ))}
        </ul>
        <img src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}

export default View
