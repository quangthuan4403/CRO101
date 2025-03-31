const admin = require("firebase-admin")
const serviceAccount = require("../asmcro102-6714b-firebase-adminsdk-fbsvc-5d863e311f.json") // Thay đổi đường dẫn tới file service account của bạn

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()

// Kiểm tra dữ liệu trong collection 'products'
async function checkProductsData() {
  try {
    console.log("Checking products collection...")

    const productsRef = db.collection("products")
    const snapshot = await productsRef.get()

    if (snapshot.empty) {
      console.log("No products found in the collection!")
      return
    }

    console.log(`Found ${snapshot.size} products`)

    // Kiểm tra từng document
    let missingTypeCount = 0
    let missingNameCount = 0
    let missingPriceCount = 0
    let missingImageCount = 0

    snapshot.forEach((doc) => {
      const data = doc.data()
      console.log(`Product ID: ${doc.id}`)

      // Kiểm tra các trường bắt buộc
      if (!data.type) {
        console.log(`  - Missing 'type' field`)
        missingTypeCount++
      }

      if (!data.name) {
        console.log(`  - Missing 'name' field`)
        missingNameCount++
      }

      if (!data.price) {
        console.log(`  - Missing 'price' field`)
        missingPriceCount++
      }

      if (!data.imageUrl) {
        console.log(`  - Missing 'imageUrl' field`)
        missingImageCount++
      }

      // Hiển thị thông tin sản phẩm
      console.log(`  - Type: ${data.type || "undefined"}`)
      console.log(`  - Name: ${data.name || "undefined"}`)
      console.log(`  - Price: ${data.price || "undefined"}`)
      console.log(`  - Image URL: ${data.imageUrl ? "exists" : "undefined"}`)
      console.log("---")
    })

    // Tổng kết
    console.log("\nSummary:")
    console.log(`Total products: ${snapshot.size}`)
    console.log(`Products missing 'type' field: ${missingTypeCount}`)
    console.log(`Products missing 'name' field: ${missingNameCount}`)
    console.log(`Products missing 'price' field: ${missingPriceCount}`)
    console.log(`Products missing 'imageUrl' field: ${missingImageCount}`)

    // Đề xuất sửa lỗi
    if (missingTypeCount > 0) {
      console.log("\nSuggested fix for missing type:")
      console.log("Run the following script to add missing type field:")
      console.log(`
const batch = db.batch();
const productsRef = db.collection('products');
const snapshot = await productsRef.where('type', '==', null).get();

snapshot.forEach(doc => {
  const docRef = productsRef.doc(doc.id);
  batch.update(docRef, { type: 'unknown' });
});

await batch.commit();
console.log('Updated missing type fields');
      `)
    }
  } catch (error) {
    console.error("Error checking products data:", error)
  } finally {
    process.exit(0)
  }
}

// Chạy hàm kiểm tra
checkProductsData()