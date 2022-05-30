import store from '../redux/configureStore';

const FavoritesPage = () => {
  console.log(store.getState());
  return (
    <div className="p-10 pt-20">
      <h1 className="text-3xl font-bold">My Favorites</h1>
      <div className="container mx-auto flex flex-col">
        FAVS
      </div>
    </div>
  );
};

export default FavoritesPage;
