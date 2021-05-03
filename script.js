Vue.component('details-modal', {
  props:{
    instrument: Object
  },
  template: '#details-modal-template'
});

Vue.component('create-modal', {
  props:{
    newInstrument:{
      type: Object,
      default: function(){
        return{
          name: "",
          type: "",
          price: 0,
          brand: "",
          image: "",
          inCart: false,
          details: false
        }
      }
    }
  },
  template: '#create-modal-template'
});

new Vue({
  el: "#app",
  data:{
    showCreateModal: false,
    myCart: [],
    instruments: [{
      name: "Noventa Jazzmaster",
      type: "Guitar",
      price: 1150,
      brand: "Fender",
      image: "https://images.samash.com/sa/F09/F0932340X.fpx?cell=89,89&qlt=90&cvt=jpg",
      inCart: false,
      details: false
    },
    {
      name: "EBW70C",
      type: "Guitar",
      price: 2080,
      brand: "Maton",
      image: "https://maton.com.au/assets/uploads/products/EBW70CHero.jpg",
      inCart: false,
      details: false
    },
    {
      name: "DTX6K-X",
      type: "Drums",
      price: 1000,
      brand: "Yamaha",
      image: "https://images.samash.com/sa/YDT/YDTX6KXXX-P.fpx?cell=540,400&qlt=90&cvt=jpg",
      inCart: false,
      details: false
    },
    {
      name: "Noventa Telecaster",
      type: "Guitar",
      price: 950,
      brand: "Fender",
      image: "https://images.samash.com/sa/F09/F0912307X.fpx?cell=89,89&qlt=90&cvt=jpg",
      inCart: false,
      details: false
    },
    {
      name: "JR Signature",
      type: "Guitar",
      price: 2700,
      brand: "Maton",
      image: "https://maton.com.au/images/made/assets/uploads/products/JRSignatureThumbnail_900_354_s.png",
      inCart: false,
      details: false
    },  
    {
      name: "P-125",
      type: "Piano",
      price: 825,
      brand: "Yamaha",
      image: "https://media.musiciansfriend.com/is/image/MMGS7/L84061000001000-01-80x80.jpg",
      inCart: false,
      details: false
    }              
   ],
  },
  methods:{
    addToCart: function(instrument){
      instrument.inCart = true;
      instrument.details = false;
      this.myCart.push(instrument);
    },
    emptyCart: function(){
      this.instruments.forEach(function(instrument){
        instrument.inCart = false;
      })
      this.myCart = [];
    },
    createInstrument: function(newInstrument){
      var errors = [];
      if (newInstrument.name === ""){
        errors.push("A name is required to be entered");
      }
      if (newInstrument.type === ""){
        errors.push("A type is required to be entered");
      }
      if (newInstrument.price <= 0){
        errors.push("Price must exceed 0");
      }
      if (newInstrument.brand === ""){
        errors.push("A brand must be selected");
      }
      if (errors.length > 0){
        alert(errors);
      }else{
        this.instruments.push(newInstrument);
        this.showCreateModal = false;
      }
    }
  }
});