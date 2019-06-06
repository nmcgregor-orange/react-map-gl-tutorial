import React from 'react';
import PropTypes from 'prop-types';
import Store from './store';


const StoreList = ({ stores }) => {
    return stores.map((store) => (
        <Store storeData={store} key={store.id} />
    ));
};

StoreList.propTypes = {
    stores: PropTypes.array.isRequired,
};

export default StoreList;
