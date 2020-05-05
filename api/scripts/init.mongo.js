/* global db print */
/* eslint no-restricted-globals: "off" */

db.products.remove({});

// mongo mongodb+srv://AS-user:csSixFourEight@cs648cluster-9hwpd.mongodb.net/Assignment4 scripts/init.mongo.js
// mongo mongodb+srv://AS-user:cs648@cs648cluster-9hwpd.mongodb.net/Assignment4 scripts/init.mongo.js

const productDB = [
  {
    id: 1,
    Name: 'Blue Shirt',
    Price: 16.99,
    Category: 'Shirts',
    Image: 'https://mainline-menswear-res.cloudinary.com/f_auto,q_auto/mainlinemenswear/shopimages/products/132802/Mainimage.jpg',
  },
  {
    id: 2,
    Name: 'Logo Hat',
    Price: 12.99,
    Category: 'Accessories',
    Image: 'https://images-eu.ssl-images-amazon.com/images/I/51D8vCzrE5L._UX385_.jpg',
  },
  {
    id: 3,
    Name: 'Regular Fit Jeans',
    Price: 34.99,
    Category: 'Jeans',
    Image: 'https://img1.momoshop.com.tw/goodsimg/0005/927/836/5927836_B.jpg',
  },
  {
    id: 4,
    Name: 'MEN CASHMERE MOCK NECK SWEATER',
    Price: 19.9,
    Category: 'Sweaters',
    Image: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/180216/item/goods_03_180216.jpg',
  },
];

db.products.insertMany(productDB);
const count = db.products.count();
print('Inserted', count, 'products');

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ Name: 1 });
db.products.createIndex({ Price: 1 });
db.products.createIndex({ Categories: 1 });
