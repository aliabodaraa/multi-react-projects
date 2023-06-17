import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import test1 from "./test1";

class App extends React.Component {
  state = { language: 'english' };
  onLanguageChange = language => {
    this.setState({ language });
  };
  
  render() {
    
    return (
      <div className="ui container">
        {/* createSelector Implementation */}

        {
        test1({
          posts :{
            post1:{name:"post1"},
            post2:{name:"post2"},
            post3:{name:"post3"},
            post4:{name:"post4"}
          },
          selectedPostsIds :[1,2,3]
        })
        }
        {/* createSelector Implementation */}
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>

        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
