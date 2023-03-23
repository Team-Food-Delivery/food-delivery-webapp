import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import Search from '../pages/Search';
import SearchResults from '../pages/SearchResults';

const MainSearch = () => {
  const [storeSearch, setStoreSearch] = useState("")
  return (
    <SafeAreaView>
      <Search storeSearch={storeSearch} setStoreSearch={setStoreSearch} />
      <SearchResults />
    </SafeAreaView>
  )
}

export default MainSearch;