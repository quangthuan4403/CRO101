
const admin = require("firebase-admin")
const serviceAccount = require("../asmcro102-6714b-firebase-adminsdk-fbsvc-5d863e311f.json") // Thay đổi đường dẫn tới file service account của bạn

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()

// Sửa dữ liệu trong collection 'products'
async function fixProductsData() {
  try {
    console.log("Fixing products collection...")

    // Sửa các document thiếu trường 'type'
    const missingTypeQuery = db.collection("products").where("type", "==", null)
    const missingTypeSnapshot = await missingTypeQuery.get()

    if (!missingTypeSnapshot.empty) {
      console.log(`Found ${missingTypeSnapshot.size} products missing 'type' field`)

      const batch = db.batch()

      missingTypeSnapshot.forEach((doc) => {
        const docRef = db.collection("products").doc(doc.id)
        batch.update(docRef, { type: "unknown" })
        console.log(`Fixing type for product ${doc.id}`)
      })

      await batch.commit()
      console.log("Fixed missing type fields")
    } else {
      console.log("No products with missing type field found")
    }

    // Sửa các document thiếu trường 'name'
    const missingNameQuery = db.collection("products").where("name", "==", null)
    const missingNameSnapshot = await missingNameQuery.get()

    if (!missingNameSnapshot.empty) {
      console.log(`Found ${missingNameSnapshot.size} products missing 'name' field`)

      const batch = db.batch()

      missingNameSnapshot.forEach((doc) => {
        const docRef = db.collection("products").doc(doc.id)
        batch.update(docRef, { name: "Sản phẩm không tên" })
        console.log(`Fixing name for product ${doc.id}`)
      })

      await batch.commit()
      console.log("Fixed missing name fields")
    } else {
      console.log("No products with missing name field found")
    }

    // Sửa các document thiếu trường 'price'
    const missingPriceQuery = db.collection("products").where("price", "==", null)
    const missingPriceSnapshot = await missingPriceQuery.get()

    if (!missingPriceSnapshot.empty) {
      console.log(`Found ${missingPriceSnapshot.size} products missing 'price' field`)

      const batch = db.batch()

      missingPriceSnapshot.forEach((doc) => {
        const docRef = db.collection("products").doc(doc.id)
        batch.update(docRef, { price: 0 })
        console.log(`Fixing price for product ${doc.id}`)
      })

      await batch.commit()
      console.log("Fixed missing price fields")
    } else {
      console.log("No products with missing price field found")
    }

    // Sửa các document thiếu trường 'imageUrl'
    const missingImageQuery = db.collection("products").where("imageUrl", "==", null)
    const missingImageSnapshot = await missingImageQuery.get()

    if (!missingImageSnapshot.empty) {
      console.log(`Found ${missingImageSnapshot.size} products missing 'imageUrl' field`)

      const batch = db.batch()

      missingImageSnapshot.forEach((doc) => {
        const docRef = db.collection("products").doc(doc.id)
        batch.update(docRef, { imageUrl: "https://via.placeholder.com/300" })
        console.log(`Fixing imageUrl for product ${doc.id}`)
      })

      await batch.commit()
      console.log("Fixed missing imageUrl fields")
    } else {
      console.log("No products with missing imageUrl field found")
    }

    console.log("All fixes completed!")
  } catch (error) {
    console.error("Error fixing products data:", error)
  } finally {
    process.exit(0)
  }
}

// Chạy hàm sửa dữ liệu
fixProductsData()
