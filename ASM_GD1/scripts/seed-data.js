// Đây là script để thêm dữ liệu mẫu vào Firestore
// Bạn có thể chạy script này bằng Node.js

const admin = require("firebase-admin")
const serviceAccount = require("../asmcro102-6714b-firebase-adminsdk-fbsvc-5d863e311f.json") // Thay đổi đường d���n tới file service account của bạn

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()

// Dữ liệu mẫu cho sản phẩm
// Dữ liệu mẫu cho sản phẩm
const products = [
  // CÂY TRỒNG
  {
    name: 'Spider Plant',
    type: 'plant',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Cây Nhện (Spider Plant) là một trong những loại cây trồng trong nhà phổ biến nhất. Chúng dễ chăm sóc, có khả năng thanh lọc không khí và sinh sản nhanh chóng. Lá dài, mỏng với các sọc trắng và xanh tạo nên vẻ đẹp độc đáo.',
    shortDescription: 'Cây dễ chăm sóc, thanh lọc không khí hiệu quả',
    lightRequirement: 'Ưa bóng',
    waterRequirement: 'Tưới 1 lần/tuần',
    featured: true,
    stock: 50,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Song of India',
    type: 'plant',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Cây Song of India (Dracaena reflexa) là loại cây có nguồn gốc từ Madagascar, với lá xanh vàng đẹp mắt. Cây có khả năng thanh lọc không khí, loại bỏ các chất độc hại như formaldehyde, xylene và toluene.',
    shortDescription: 'Lá xanh vàng đẹp mắt, thanh lọc không khí',
    lightRequirement: 'Ưa sáng',
    waterRequirement: 'Tưới 2 lần/tuần',
    featured: true,
    stock: 30,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Grey Star Calarthea',
    type: 'plant',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Calathea Grey Star là một loại cây có lá với họa tiết độc đáo, tạo điểm nhấn cho không gian sống. Lá có màu xanh đậm với các đường vân bạc tạo nên vẻ đẹp sang trọng. Cây này thích hợp đặt trong phòng khách hoặc phòng ngủ.',
    shortDescription: 'Họa tiết lá độc đáo với các đường vân bạc',
    lightRequirement: 'Ưa sáng',
    waterRequirement: 'Tưới 2 lần/tuần',
    featured: false,
    stock: 25,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Banana Plant',
    type: 'plant',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Cây Chuối cảnh (Musa) với lá to xanh mướt, mang lại cảm giác nhiệt đới cho không gian sống. Lá chuối rộng và dài tạo nên điểm nhấn ấn tượng trong nhà. Cây chuối cảnh thích hợp đặt ở góc phòng hoặc hành lang rộng.',
    shortDescription: 'Lá to xanh mướt, mang lại cảm giác nhiệt đới',
    lightRequirement: 'Ưa sáng',
    waterRequirement: 'Tưới 3 lần/tuần',
    featured: false,
    stock: 20,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Monstera Deliciosa',
    type: 'plant',
    price: 350000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Monstera Deliciosa hay còn gọi là cây trầu bà lá xẻ, với những chiếc lá to, xẻ thùy đặc trưng. Đây là loại cây cảnh nội thất được ưa chuộng nhất hiện nay vì vẻ đẹp nhiệt đới và khả năng sinh trưởng tốt trong điều kiện trong nhà.',
    shortDescription: 'Lá to xẻ thùy đặc trưng, dễ chăm sóc',
    lightRequirement: 'Ánh sáng gián tiếp',
    waterRequirement: 'Tưới 1-2 lần/tuần',
    featured: true,
    stock: 15,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Fiddle Leaf Fig',
    type: 'plant',
    price: 450000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Cây Bàng Singapore (Fiddle Leaf Fig) là loại cây có lá to, bóng và đẹp mắt. Đây là loại cây cảnh cao cấp, thích hợp làm điểm nhấn trong phòng khách hoặc văn phòng. Lá cây có hình violin độc đáo và màu xanh đậm bóng.',
    shortDescription: 'Lá to bóng hình violin, sang trọng',
    lightRequirement: 'Ánh sáng gián tiếp',
    waterRequirement: 'Tưới 1 lần/tuần',
    featured: true,
    stock: 10,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  
  // CHẬU CÂY
  {
    name: 'Planta Trắng',
    type: 'planter',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Bộ chậu Planta màu trắng tinh khôi, thiết kế tối giản phù hợp với mọi không gian. Bộ sản phẩm gồm 3 chậu kích thước khác nhau, làm từ gốm sứ cao cấp với lớp men trắng bóng.',
    shortDescription: 'Màu trắng tinh khôi, thiết kế tối giản',
    featured: true,
    stock: 40,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Planta Lemon Balm',
    type: 'planter',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Bộ chậu Planta màu xanh lá nhạt kết hợp với trắng, mang lại cảm giác tươi mát. Bộ sản phẩm gồm 3 chậu kích thước khác nhau, làm từ gốm sứ cao cấp với thiết kế hai tông màu hiện đại.',
    shortDescription: 'Màu xanh lá nhạt kết hợp với trắng, tươi mát',
    featured: true,
    stock: 35,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Planta Rosewood',
    type: 'planter',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Bộ chậu Planta màu hồng pastel kết hợp với trắng, mang lại không gian sống ấm áp. Bộ sản phẩm gồm 3 chậu kích thước khác nhau, làm từ gốm sứ cao cấp với thiết kế hai tông màu tinh tế.',
    shortDescription: 'Màu hồng pastel kết hợp với trắng, ấm áp',
    featured: false,
    stock: 30,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Planta Dove Grey',
    type: 'planter',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Bộ chậu Planta màu xám nhạt kết hợp với trắng, phong cách tối giản hiện đại. Bộ sản phẩm gồm 3 chậu kích thước khác nhau, làm từ gốm sứ cao cấp với thiết kế hai tông màu sang trọng.',
    shortDescription: 'Màu xám nhạt kết hợp với trắng, tối giản hiện đại',
    featured: false,
    stock: 25,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Chậu Terrazzo Tròn',
    type: 'planter',
    price: 320000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Chậu Terrazzo tròn với họa tiết đá tự nhiên đa màu sắc trên nền xi măng. Mỗi chậu là một tác phẩm độc đáo với các mảnh đá được đặt ngẫu nhiên, tạo nên vẻ đẹp riêng biệt.',
    shortDescription: 'Họa tiết đá tự nhiên đa màu sắc, độc đáo',
    featured: true,
    stock: 20,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Chậu Gỗ Handmade',
    type: 'planter',
    price: 280000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Chậu gỗ handmade được làm thủ công từ gỗ tự nhiên, mang đến vẻ đẹp mộc mạc và gần gũi với thiên nhiên. Mỗi chậu đều có vân gỗ độc đáo và được xử lý chống mối mọt, chống thấm nước.',
    shortDescription: 'Làm thủ công từ gỗ tự nhiên, mộc mạc',
    featured: false,
    stock: 15,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  
  // PHỤ KIỆN
  {
    name: 'Bình tưới CB2 SAIC',
    type: 'accessory',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Bình tưới CB2 SAIC với thiết kế độc đáo, làm từ gốm sứ cao cấp. Dung tích 1 lít, vòi dài giúp tưới nước dễ dàng đến những chậu cây khó tiếp cận. Thiết kế tối giản nhưng sang trọng, là món đồ trang trí đẹp mắt cho không gian.',
    shortDescription: 'Thiết kế độc đáo, làm từ gốm sứ cao cấp',
    featured: true,
    stock: 20,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Bình xịt Xiaoda',
    type: 'accessory',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Bình xịt Xiaoda với thiết kế hiện đại, phun sương đều và mịn. Dung tích 300ml, thân bình làm từ nhựa ABS cao cấp kết hợp với đầu phun bằng đồng, tạo ra những hạt sương siêu mịn, lý tưởng cho cây ưa ẩm.',
    shortDescription: 'Thiết kế hiện đại, phun sương đều và mịn',
    featured: true,
    stock: 30,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Bộ cuốc xẻng mini',
    type: 'accessory',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Bộ dụng cụ làm vườn mini gồm cuốc, xẻng và cào, làm từ thép không gỉ và tay cầm gỗ. Thiết kế nhỏ gọn, phù hợp cho việc chăm sóc cây cảnh trong nhà, thay đất, làm tơi đất và trồng cây mới.',
    shortDescription: 'Bộ dụng cụ làm vườn mini, thép không gỉ và tay cầm gỗ',
    featured: false,
    stock: 25,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Giá đỡ Finn Terrazzo',
    type: 'accessory',
    price: 250000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Giá đỡ Finn Terrazzo làm từ bê tông với họa tiết terrazzo độc đáo. Chiều cao 15cm, đường kính 20cm, có thể chịu được trọng lượng lên đến 5kg. Thiết kế hiện đại, phù hợp với nhiều phong cách nội thất.',
    shortDescription: 'Làm từ bê tông với họa tiết terrazzo độc đáo',
    featured: false,
    stock: 15,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Đèn LED trồng cây',
    type: 'accessory',
    price: 350000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Đèn LED trồng cây với ánh sáng phổ đầy đủ, giúp cây phát triển tốt trong điều kiện thiếu ánh sáng tự nhiên. Công suất 15W, có thể điều chỉnh độ cao và hướng chiếu sáng. Hẹn giờ tự động bật/tắt.',
    shortDescription: 'Ánh sáng phổ đầy đủ, điều chỉnh độ cao và hướng',
    featured: true,
    stock: 20,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Phân bón hữu cơ Planta',
    type: 'accessory',
    price: 120000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Phân bón hữu cơ Planta được sản xuất từ nguyên liệu tự nhiên, an toàn cho cây trồng và người sử dụng. Gói 500g, giàu dinh dưỡng, giúp cây phát triển khỏe mạnh, lá xanh và hoa nở đẹp.',
    shortDescription: 'Hữu cơ 100%, giàu dinh dưỡng, an toàn',
    featured: false,
    stock: 50,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  
  // COMBO CHĂM SÓC
  {
    name: 'Lemon Balm Grow Kit',
    type: 'growkit',
    price: 350000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Bộ kit trồng cây Lemon Balm đầy đủ với hạt giống, đất hữu cơ, chậu Planta và hướng dẫn chi tiết. Lemon Balm là loại thảo mộc thơm, có thể dùng làm trà hoặc gia vị. Bộ kit phù hợp cho người mới bắt đầu trồng cây.',
    shortDescription: 'Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...',
    featured: true,
    stock: 20,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Succulent Starter Kit',
    type: 'growkit',
    price: 380000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Bộ kit trồng sen đá cho người mới bắt đầu, bao gồm 3 loại sen đá mini, đất trồng chuyên dụng, sỏi trang trí, chậu gốm và hướng dẫn chăm sóc chi tiết. Sen đá là loại cây dễ chăm sóc, phù hợp với người bận rộn.',
    shortDescription: 'Gồm: 3 loại sen đá mini, đất chuyên dụng, sỏi trang trí, chậu gốm...',
    featured: true,
    stock: 15,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  },
  {
    name: 'Herb Garden Kit',
    type: 'growkit',
    price: 450000,
    imageUrl: 'https://i.pinimg.com/736x/7d/a9/cc/7da9cc36c5aa007cb256fd98c122ab48.jpg',
    images: ['https://i.pinimg.com/736x/89/6e/d1/896ed107008e8b7a71281eb110b8da58.jpg',
      'https://i.pinimg.com/736x/43/13/60/4313606b73807a3b379967a5d0d78939.jpg',
      'https://i.pinimg.com/736x/0b/09/f3/0b09f348a06188ab6410db63755714b3.jpg'
    ],
    description: 'Bộ kit vườn thảo mộc mini với 4 loại cây gia vị phổ biến: húng quế, húng lủi, rosemary và thyme. Bao gồm 4 chậu gốm, đất trồng hữu cơ, phân bón và hướng dẫn chăm sóc. Lý tưởng cho góc bếp hoặc ban công nhỏ.',
    shortDescription: 'Gồm: 4 loại cây gia vị, 4 chậu gốm, đất hữu cơ, phân bón...',
    featured: false,
    stock: 10,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }
];

// Thêm sản phẩm vào Firestore
const seedProducts = async () => {
  for (const product of products) {
    try {
      await db.collection("products").add({
        ...product,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      })
      console.log(`Added product: ${product.name}`)
    } catch (error) {
      console.error(`Error adding product ${product.name}:`, error)
    }
  }
}

// Chạy hàm thêm dữ liệu
seedProducts()
  .then(() => {
    console.log("Seeding completed!")
    process.exit(0)
  })
  .catch((error) => {
    console.error("Error seeding data:", error)
    process.exit(1)
  })