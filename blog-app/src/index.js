import { HeaderComponent } from "./components/header.component"
import { NavigationComponent } from "./components/navigation.component"
import { CreateComponent } from "./components/create.component"
import { PostsComponent } from "./components/posts.component"
import { FavouriteComponent } from "./components/favourite.component"

new HeaderComponent('header')
const navigationComponent = new NavigationComponent('navigation')

const createComponent = new CreateComponent('create')
const postsComponent = new PostsComponent('posts')
const favouriteComponent = new FavouriteComponent('favourite')

navigationComponent.registerTabs([
  {name: 'create', component: createComponent},
  {name: 'posts', component: postsComponent},
  {name: 'favourite', component: favouriteComponent}
])
