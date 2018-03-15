
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'Churro Single Stack', description: 'Single Stack of Churro Gonutz', price: '300', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29186192_10156209240622236_5105918453617786880_n.jpg?oh=4a2485468206637750db28752f6884ae&oe=5B403017' },
        {name: 'Churro Double Stack', description: 'Double Stack of Churro Gonutz', price: '500', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29216863_10156209240712236_8372653691143979008_n.jpg?oh=7a4e2e9d3c9d37d62f3f718cc3c51cf8&oe=5B3E1287' },
        {name: 'Churro Triple Stack', description: 'Triple Stack of Churro Gonutz', price: '700', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29186981_10156209240467236_2025667504923213824_o.jpg?oh=3ceaba8db13c51ef48f0627ed8928d31&oe=5B3C77A5' },
        {name: 'Churro Tower', description: 'Triple Stack of Churro Gonutz, two scoops of Vanilla Ice Cream, Chocolate drizzle with Whip Cream, Sprinkles and Maraschino Cherry.', price: '800', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29249351_10156209240562236_8872788777198682112_n.jpg?oh=7a1ff26377b87dbaba6f3e75ca9248b6&oe=5B2E40D4' },
        {name: 'Chu-Reo', description: 'Churro Gonut topped with Vanilla Ice Cream, Oreo Crumble and Chocolate drizzle.', price: '500', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29244137_10156209239952236_3122026918761725952_n.jpg?oh=cdd60cd085a6a2f590856e952e1fe54a&oe=5B3EF95A' },
        {name: 'Spicy Churro', description: 'CAJETA Caramel Sauce and Chocolate drizzle with ancho chile powder.', price: '700', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29196864_10156209240062236_5286619401481617408_n.jpg?oh=eef410244b19e4fbfcd267b7e6d4ccd7&oe=5B3EECF1' },
        {name: 'Fruity Pebbles', description: 'Churro with Vanilla Ice Cream, topped with Fruity Pebbles and Chocolate drizzle.', price: '500', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29216936_10156209239957236_4698253725683154944_n.jpg?oh=ae913992dfb0e482a6ae78c498c8f098&oe=5B38EA2E' },
        {name: 'Attn Bacon Lovers', description: 'Churro topped with Vanilla Ice Cream and Fresh Bacon Crumble drizzled with Salted Caramel.', price: '500', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29186755_10156209240162236_3775796571292041216_n.jpg?oh=57fbe05565fa9e18dad21c03e92141a7&oe=5B3A1AD9' },
// toppings
        {name: 'Vanilla Ice Cream', description: 'Topping - Vanilla Ice Cream', price: '150', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29216330_10156209240422236_5532630133149532160_o.jpg?oh=e0d287930560918350a7184bffb14cd4&oe=5B4A3827' },
        {name: 'Bacon Brittle', description: 'Topping - Bacon Brittle', price: '50', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29243803_10156209240797236_1194803440107126784_n.jpg?oh=5095122f6916d66134086b6dad1ccadc&oe=5B35064D' },
        {name: 'Dulce De Leche', description: 'Topping - Dulce De Leche', price: '50', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29196857_10156209240312236_9049880380575842304_n.jpg?oh=783b717cb4e06bd3616a4673da16611c&oe=5B499330' },
        {name: 'Oreo Crumble', description: 'Topping - Oreo Crumble', price: '50', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29216587_10156209241112236_7746526525440131072_n.jpg?oh=29c41c6558a80cfd31efd2528ba54a67&oe=5B3E4C41' },
        {name: 'M&Ms', description: 'Topping - M&Ms', price: '50', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29178747_10156209240992236_6098248876169363456_n.jpg?oh=4d941ee6c0f55aef05a9dcebd0a1e49b&oe=5B34B03A' },
        {name: 'Caramel Sauce', description: 'Topping - Caramel Sauce', price: '25', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29215984_10156209240297236_1569798851492052992_n.jpg?oh=193cc40d00d94844643b5ad143bcbef4&oe=5B3795C1' },
        {name: 'Marshmallow Whip Cream', description: 'Topping - Marshmallow Whip Cream', price: '25', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29179006_10156209240052236_6078181431752785920_n.jpg?oh=838ea97ddd24eb1cce3de0f81c0327dc&oe=5B48FC16' },
        {name: 'Rainbow Sprinkles', description: 'Topping - Rainbow Sprinkles', price: '25', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29196729_10156209240552236_4689799748280909824_n.jpg?oh=7316426ded8ff9a1880bcd3121805c51&oe=5B4C9CE1' },
        {name: 'Maraschino Cherry', description: 'Topping - Maraschino Cherry', price: '25', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29213902_10156209273837236_8034069187133440000_n.jpg?oh=eb8b7ca2e2e3a2a1786433b3d6b9a379&oe=5B33CE2F' },
        {name: 'Whipped Cream', description: 'Topping - Whipped Cream', price: '25', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29179006_10156209240052236_6078181431752785920_n.jpg?oh=838ea97ddd24eb1cce3de0f81c0327dc&oe=5B48FC16' },
// beverages
        {name: 'Small Churro Cafe', description: 'Small Hot Coffee', price: '450', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29216805_10156209240342236_4698059322578436096_n.jpg?oh=4ad771c92d4bbe726639a31f6df8454d&oe=5B4A95E0' },
        {name: 'Large Churro Cafe', description: 'Large Hot Coffee', price: '500', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29216805_10156209240342236_4698059322578436096_n.jpg?oh=4ad771c92d4bbe726639a31f6df8454d&oe=5B4A95E0' },
        {name: 'Small Hot Chocolate', description: 'Small Hot Chocolate', price: '450', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29216805_10156209240342236_4698059322578436096_n.jpg?oh=4ad771c92d4bbe726639a31f6df8454d&oe=5B4A95E0' },
        {name: 'Large Hot Chocolate', description: 'Large Hot Chocolate', price: '500', img_url: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/29216805_10156209240342236_4698059322578436096_n.jpg?oh=4ad771c92d4bbe726639a31f6df8454d&oe=5B4A95E0' }
      ]);
    });
};
