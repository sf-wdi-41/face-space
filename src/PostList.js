import React, { Component } from 'react';
import Post from './Post'

class PostList extends Component {

  renderPosts(){
    let posts = [
      {
        status: "I had a quesadilla",
        user: "Justin Castilla",
        picture: "http://del.h-cdn.co/assets/17/02/640x853/gallery-1484241389-beef-and-avocado-quesadillasp1.jpg"
      },
      {
        status: "I'm tired, I ate a lot of chicken",
        user: "Tucker Bolding",
        picture: "https://images-gmi-pmc.edge-generalmills.com/549e441a-eed1-4e39-8ad3-6ae60ab3ad7f.jpg"
      },
      {
        status: "I had a pesto pasta",
        user: "Anthony",
        picture: "https://www.slenderkitchen.com/sites/default/files/recipe_images/ZucchiniPestoPasta2.jpg"
      },
      {
        status: "I had pizza for lunch",
        user: "LevPer",
        picture: "https://i.ytimg.com/vi/ijYHDtSesxk/maxresdefault.jpg"
      },
      {
        status: "I had soup - No Soup For You!",
        user: "Masha",
        picture: "https://i0.wp.com/cheaterchef.com/wp-content/uploads/2013/01/Borscht.jpg?w=1170"
      },
      {
        status: "I had a half chicken",
        user: "Nick Lee",
        picture: "https://images.mealpal.com/portico_half_chicken_caesar_web.jpg"
      },
      {
        status: "I’ve been having McDonald’s for lunch since last month",
        user: "SherwinShann",
        picture: "https://pbs.twimg.com/media/CrIs83BWAAAnrCR.jpg"
      },
      {
        status: "I ate a salad. It was spicy.",
        user: "BethAgain",
        picture: "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/1/21/0/WU1208H_Spicy-Mango-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1453396645799.jpeg",
      },
      {
        status:"I had burger",
        user:"Ken",
        picture: "https:http://static3.businessinsider.com/image/54f5f3d26da811277fdf0cf2/one-possible-solution-to-mcdonalds-menu-woes.jpg"
      },
      { status: "I had mcchicken",
        user: "Ray",
        picture: "https://www.mcdonalds.cz/wp-content/uploads/2016/03/pro_mc-chicken.png"
      },
      {
        status: "I had dumplings",
        user:"Sherry",
        picture:"http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/23/0/SH1509_pan-fried-chicken-dumplings-with-sweet-and-spicy-dipping-sauce_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597482148.jpeg"
      }
    ]

    return posts.map((elem, index) => <Post key={index} statusInfo={elem} />)
  }

  render() {



    return (
      <div >
        Hello, welcome to {this.props.appName}!

        {this.renderPosts()}
      </div>
    );
  }
}

export default PostList;
