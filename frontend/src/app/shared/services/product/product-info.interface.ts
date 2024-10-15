export interface productInformationI {
  name: string;
  category: string;
  price: string;
  type: string;
  status: string;

  model_glb_url: string;
  available_sizes: Array<string>;
  color: {
    name: string;
    available_number: number;
  };
  description: {
    message: string;
    style: string;
    model: string;
  };
}
