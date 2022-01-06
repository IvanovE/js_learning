import { HeaderComponent } from "./components/header.component"
import { NavigationComponent } from "./components/navigation.component"
import { CreateComponent } from "./components/create.component"
import { PostsComponent } from "./components/posts.component"
import { FavouriteComponent } from "./components/favourite.component"
import { LoaderComponent } from "./components/loader.component"

new HeaderComponent('header')
const navigationComponent = new NavigationComponent('navigation')

const loader = new LoaderComponent('loader')

const createComponent = new CreateComponent('create')
const postsComponent = new PostsComponent('posts', loader)
const favouriteComponent = new FavouriteComponent('favourite', loader)

navigationComponent.registerTabs([
  {name: 'create', component: createComponent},
  {name: 'posts', component: postsComponent},
  {name: 'favourite', component: favouriteComponent}
])
