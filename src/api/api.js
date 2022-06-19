import { AxiosInstance } from "../util/AxiosInstance";


export const product = async () => {
  try {

    const data = await AxiosInstance.get("https://humourbaba1.myshopify.com/admin/api/2022-04/products.json",
      {
        
        headers: {
          'Access-Control-Allow-Headers': 'Authorization, Content-Type',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': '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'}
      });
          
    return data;

  } catch (error) {

    throw error;

  }
}

