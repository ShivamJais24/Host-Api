const Product=require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    //tackle for particlaur searching for only company name if yu want all directory element you can tackle for everyone,
    const {company,name,feature,sort,select} =req.query;
    const queryObject={};

    if(company){
      queryObject.company=company;
      console.log(queryObject.company);
      
    }
  
    
   if(feature){
      queryObject.feature=feature
      
    }
    if(name){
      queryObject.name={$regex:name,$options:"i"};
      
    }

    let apiData= Product.find(queryObject);

    
    if(sort){
      let sortFix= sort.replace(","," ");
      apiData=apiData.sort(sortFix);

    }
    if(select){
      let selectFix= select.split(",").join(" ");

      apiData=apiData.select(selectFix);

    }

    let page=Number(req.query.page)||1
    let limit=Number(req.query.limit)||10

    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit);


    // page=2
    // limit=2
    // skip=1*3=3;

     
    const myData=await apiData;
    res.status(200).json({ success: true, product: myData,nbHits:myData.length });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getAllProductsTesting =async(req,res) =>{
      const myData=await Product.find(req.query);
    res.status(200).json({myData});
    
    };




    module.exports = {
        getAllProducts,
        getAllProductsTesting,
      };
    
