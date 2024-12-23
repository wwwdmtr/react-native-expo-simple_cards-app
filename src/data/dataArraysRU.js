export const categories = [
  {
    id: 3,
    name: 'Печенье',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Мексиканская еда',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Итальянская еда',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Смузи',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 0,
    name: 'Пицца',
    photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
  },
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Овсянные печенья',
    photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '200мл'], [1, '5г'], [2, '300г']],
    description:
      '-- Начните с очищенного красновато-коричневого картофеля, который нарежьте спичечными палочками толщиной 3/8 дюйма. Положите в миску с очень холодной водой: продолжайте промывать и менять воду, пока она не станет прозрачной; тщательно слейте воду и вытрите бумажными полотенцами или чистым кухонным полотенцем без ворса.\n\n -- Тем временем разогрейте растительное масло до 350 градусов по Фаренгейту. Положите подготовленные картофелины в масло и готовьте около 5 минут. Они приобретут золотистый оттенок. Примечание: Как только вы добавите холодный картофель в горячее масло, температура масла понизится - вы хотите, чтобы она была где-то между 330 и 325 градусами по Фаренгейту. \n\n - Достаньте картофель из масла, слейте воду и остудите. Теперь - либо поставьте в холодильник до готовности, либо полностью охладите и заморозьте на срок до 3 месяцев. Чтобы правильно заморозить, выложите полностью охлажденный картофель фри в один слой на противень и уберите в морозильную камеру до полного застывания. Затем упакуйте его в пакеты.\п\п -- Чтобы закончить приготовление, разогрейте масло до 400° F. Добавьте остывший картофель фри (это снизит температуру масла - это нормально, потому что вы хотите, чтобы температура была около 375 ° F) и готовьте несколько минут до готовности. Слегка посолите их и хорошо встряхните, чтобы соль хорошо распределилась и они не были солеными.'
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Смузи из трех ягод',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [60, '1/2 г'],
      [61, '1/2 литра'],
    ],
    description: 'Смешайте все ингредиенты в блендере и взбейте до получения однородной массы. Затем разделите на 2 чашки и при желании посыпьте сверху ягодами ежевики.'
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Веганские Печенья',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/B2C0/production/_106106754_vegnuggets976.jpg',
      'https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fgettyimages-508510211.jpg%3Fitok%3Dh-Uryi8r&w=400&c=sc&poi=face&q=85'
    ],
    time: '30',
    ingredients: [
      [0, '2 четверти'],
      [16, '1'],
      [12, '1 кружка'],
      [18, '1 кружка'],
      [19, '1 чайные ложки'],
      [1, '2 чайные ложки'],
      [4, '1/4 чайные ложки'],
      [7, '1/8 чайные ложки'],
      [20, '1/2 чайные ложки'],
      [21, '4']
    ],
    description:
      '-- Взбейте яйцо, а затем смешайте его с водой в миске. Мешать. Смешайте муку, соль, глутамат натрия, перец, луковый порошок и чесночный порошок в пакетике на молнии размером с галлон. Измельчите филе каждой грудки до толщины примерно 1/4 дюйма. Затем нарежьте на небольшие кусочки. Обваляйте каждый кусочек в мучной смеси, встряхивая в пакете с застежкой-молнией. Достаньте и обваляйте в яичной смеси. Затем снова обваляйте в мучной смеси. Взбейте, чтобы покрыть. Обжаривайте во фритюре при температуре 375 градусов в течение 10-12 минут, пока они не подрумянятся и не станут хрустящими.'
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Тыквенные Печенья',
    photo_url:
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
      'https://cdn.junglecreations.com/wp/junglecms/2018/07/4164c5bd-wide-thumbnail.jpg',
      'https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg',
      'https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg'
    ],
    time: '45',
    ingredients: [
      [0, '2 Столовые ложки'],
      [22, '1/2'],
      [23, '2 Столовые ложки'],
      [7, '2 головки'],
      [3, '1 чайные ложки'],
      [24, '1 Столовые ложки'],
      [25, '1 г'],
      [1, '2 чайные ложки'],
      [4, '2 чайные ложки'],
      [26, '15 унций'],
      [27, '8'],
      [28, '2'],
      [29, '1 кружка']
    ],
    description:
      '-- В кастрюле среднего размера на среднем огне разогрейте 1 столовую ложку масла. Добавьте лук и готовьте до мягкости, 5 минут. Добавьте чеснок и готовьте до появления аромата, еще 1 минуту. Добавьте томатную пасту и перемешайте, чтобы она покрыла лук и чеснок. Добавьте говяжий фарш и готовьте, разминая мясо деревянной ложкой, пока оно не перестанет быть розовым, 6 минут. Слейте жир.\n\n - Положите говядину обратно в кастрюлю и приправьте молотым перцем чили, паприкой, солью и перцем перчинкой. Добавьте томатный соус и фасоль. Доведите до кипения, затем уменьшите огонь и тушите 15 минут. Выложите немного чили в центр каждой тортильи, оставляя место для складывания краев. Сверху выложите фритос, затем чеддер. Загните края тортильи к центру, образуя складки. Переверните коржи так, чтобы складки были снизу и не сходились.\n\n - В сковороде среднего размера на среднем огне разогрейте оставшуюся столовую ложку масла. Выложите тортилью в хрустящую обертку швом вниз и готовьте, пока она не приобретет золотистый оттенок, от 3 до 5 минут с каждой стороны. Повторите с оставшейся хрустящей оберткой'
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Брауни',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
      'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
      'http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg',
      'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg'
    ],
    time: '30',
    ingredients: [
      [1, '2 Столовые ложки'],
      [3, '1 Столовые ложки'],
      [4, '1 чайные ложки'],
      [5, '1/2 чайные ложки'],
      [6, '1/2 чайные ложки'],
      [7, '1/2 чайные ложки'],
      [8, '1/2 чайные ложки'],
      [9, '1/2 чайные ложки'],
      [10, '1/2 чайные ложки'],
      [11, '1/2 чайные ложки'],
      [12, '1/2 кружка'],
      [13, '1 Столовые ложки'],
      [14, '1 Столовые ложки'],
      [15, '2 грудки, 2 ножки, 2 крылышка'],
      [16, '1'],
      [17, '2 четверти']
    ],
    description:
      '-- Разогрейте фритюрницу до 350°F. Тщательно перемешайте все специи. Смешайте специи с мукой, коричневым сахаром и солью. Обмакните кусочки курицы в яичный белок, чтобы слегка покрыть их, затем переложите в мучную смесь. Переверните несколько раз и убедитесь, что мучная смесь хорошо прилипла к курице.Повторите то же самое со всеми кусочками курицы. Дайте кусочкам постоять 5 минут, чтобы корочка немного подсохла. Обжаривайте курицу порциями. На приготовление грудок и крылышек потребуется 12-14 минут, а ножек и бедер - еще несколько минут. Кусочки курицы будут готовы, когда термометр для мяса, вставленный в самую толстую часть, покажет температуру 165°F. Когда курицу достанут из фритюрницы, обсушите ее на бумажных полотенцах. Подавайте горячей.'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Рыбные Тако',
    photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
    photosArray: [
      'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
      'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
      'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
    ],
    time: '35',
    ingredients: [
      [30, '1 выжимку '],
      [24, '2 чайные ложки'],
      [0, '3 Столовые ложки'],
      [3, '1 чайные ложки'],
      [31, '1/2 чайные ложки'],
      [32, '1/2 чайные ложки'],
      [4, '2 чайные ложки'],
      [33, '1/2 г'],
      [27, '8'],
      [14, '2 чайные ложки'],
      [34, '1']
    ],
    description:
      '-- В неглубокой миске среднего размера взбейте оливковое масло, сок лайма, паприку, молотый перец чили, тмин и кайенский перец. Добавьте треску, перемешивая, пока она не покроется ровным слоем. Оставьте мариноваться на 15 минут. Тем временем приготовьте салат: В большой миске взбейте майонез, сок лайма, кинзу и мед. Добавьте капусту, кукурузу и халапеньо. Посолите и поперчите.\n\n -- В большой сковороде с антипригарным покрытием на средне-сильном огне разогрейте растительное масло. Выньте треску из маринада и посолите и поперчите каждое филе с обеих сторон. Выложите рыбу мякотью вниз. Готовьте, пока рыба не станет непрозрачной, от 3 до 5 минут с каждой стороны.\n\n -- Дайте постоять 5 минут, затем разомните вилкой. Готовьте тако: Подавайте рыбу на тортильях-гриль с кукурузной кашей и авокадо. Полейте сверху соком лайма и украсьте сметаной. '
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Куриные Фахитас',
    photo_url:
      'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
    photosArray: [
      'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      [9, '1/2 чайные ложки'],
      [0, '4 Столовые ложки'],
      [1, '1/2 чайные ложки'],
      [30, '2 Столовые ложки'],
      [31, '1 чайные ложки'],
      [7, '1 чайные ложки'],
      [24, '1/2 чайные ложки'],
      [3, '1/2 чайные ложки'],
      [21, '1 кг'],
      [22, '1/2 кружка'],
      [27, '6'],
      [36, '4'],
      [37, '1/2'],
      [38, '1/2']
    ],
    description:
      '-- В большой миске смешайте 2 ст.л. растительного масла, лимонный сок и приправы; добавьте курицу. Переверните, чтобы она покрылась, накройте. Поставьте в холодильник на 1-4 часа. В большой сковороде обжарьте перец и лук в оставшемся масле до образования хрустящей корочки. Достаньте и держите в тепле. Слейте воду с курицы, вылейте маринад. В той же сковороде обжаривайте курицу на средне-сильном огне в течение 5-6 минут или пока она не перестанет быть розовой.\n\n - Верните смесь перцев в сковороду; прогрейте. Ложкой выложите начинку в центр тортильи, сложите пополам. Подавайте с начинкой по желанию.'
  },
  {
    recipeId: 6,
    categoryId: 2,
    title: 'Пицца Баффало',
    photo_url:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    photosArray: [
      'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg',
      'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
      'https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif'
    ],
    time: 50,
    ingredients: [
      [39, '1 г'],
      [40, '1 кружка'],
      [41, '1/2 кружка'],
      [42, '1/4 кружка'],
      [43, '2 Столовые ложки'],
      [44, '1/2 кружка'],
      [7, '1/4 чайные ложки'],
      [5, '1/4 чайные ложки'],
      [30, '1/4 чайные ложки'],
      [45, '2 унций'],
      [12, 'на вкус'],
      [4, '1/2 чайные ложки'],
      [47, '2'],
      [46, '9 унций']
    ],
    description:
      '-- Установите решетку в верхней трети духовки. Поставьте на решетку большую чугунную сковороду и разогрейте духовку до 500° (или до такой температуры, какую позволяет ваша духовка). Выложите тесто для пиццы в большую миску, сбрызните небольшим количеством масла и переверните, чтобы оно покрылось. Накройте миску полиэтиленовой пленкой и дайте тесту постоять при комнатной температуре, пока противень и духовка разогреваются.\n\n -- Тем временем приготовьте острый соус, соус маринара и сливочное масло в кастрюле среднего размера на среднем огне, периодически помешивая, пока масло не растопится. Добавьте сливки, уменьшите огонь до минимума и тушите, периодически помешивая, пока они слегка не загустеют и не прогреются, около 10 минут. Разогрейте 1 ст.л. сливочного масла. разогрейте масло в большой сковороде на средне-сильном огне. Выложите курицу, перемешайте, чтобы покрыть, затем добавьте ¼ стакана соуса "Буффало".\n\n - Готовьте курицу, периодически помешивая, пока она не прогреется, около 2 минут. Уменьшите огонь и тушите, часто помешивая, пока курица хорошо не покроется, а соус слегка не загустеет, около 5 минут. Тем временем взбейте йогурт, лимонный сок, сельдерейную соль, чесночный порошок, ¼ стакана голубого сыра, ½ ч.л. перца и 2 ст.л. воды в небольшой миске, добавив еще воды, если соус покажется вам слишком густым (он должен получиться жидким); отставьте в сторону.\п\п -- Выложите тесто на слегка посыпанную мукой рабочую поверхность. Сформуйте руками круглую форму, которая будет немного больше, чем в чугунной сковороде, которую вы используете. Достаньте горячую сковороду из духовки (следите за ручкой!) и поставьте на жаропрочную поверхность. Всыпьте в форму немного муки. Выложите тесто на сковороду, затем распределите края теста по краям сковороды кончиками пальцев (используйте резиновую лопатку или деревянную ложку, если боитесь прикасаться к горячей сковороде). Сбрызните немного масла по внутреннему краю формы так, чтобы оно стекало по тесту, что будет способствовать его подрумяниванию.\n\n -- Намажьте тесто примерно ⅓ стакана соуса "Буффало". Выложите сверху моцареллу, затем посыпьте оставшейся четвертью стакана голубого сыра. Сверху выложите куриную массу. Выпекайте пиццу на верхней решетке, пока корочка и сыр не подрумянятся, 15-20 минут. Поставьте сковороду на плиту (опять же, следите за ручкой!) и дайте пицце постоять несколько минут. С помощью лопатки выложите пиццу на разделочную доску или блюдо. Сверху выложите сельдерей, затем полейте оставшимся соусом из голубого сыра. Поперчите и сбрызните маслом.'
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Картофель фри',
    photo_url: 'https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg',
    photosArray: [
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '200мл'], [1, '5g'], [2, '300g']],
    description:
      '-- Начните с очищенного красновато-коричневого картофеля, который нарежьте спичечными палочками толщиной 3/8 дюйма. Положите в миску с очень холодной водой: продолжайте промывать и менять воду, пока она не станет прозрачной; тщательно слейте воду и вытрите бумажными полотенцами или чистым кухонным полотенцем без ворса.\п\п -- Тем временем разогрейте растительное масло до 350 градусов по Фаренгейту. Положите подготовленные картофелины в масло и готовьте около 5 минут. Они приобретут золотистый оттенок. Примечание: Как только вы добавите холодный картофель в горячее масло, температура масла понизится - вы хотите, чтобы она была где-то между 330 и 325 градусами по Фаренгейту. \n\n - Достаньте картофель из масла, слейте воду и остудите. Теперь - либо поставьте в холодильник до готовности, либо полностью охладите и заморозьте на срок до 3 месяцев. Чтобы правильно заморозить, выложите полностью охлажденный картофель фри в один слой на противень и уберите в морозильную камеру до полного застывания. Затем упакуйте его в пакеты.\п\п -- Чтобы закончить приготовление, разогрейте масло до 400° F. Добавьте остывший картофель фри (это снизит температуру масла - это нормально, потому что вы хотите, чтобы температура была около 375 ° F) и готовьте несколько минут до готовности. Слегка посолите их и хорошо встряхните, чтобы соль хорошо распределилась и они не были солеными.'
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Спаггети Карбонара',
    photo_url: 'https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg',
    photosArray: [
      'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
      'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
      'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
    ],
    time: 15,
    ingredients: [
      [48, '50г'],
      [49, '100г'],
      [50, '350г'],
      [51, '2 шт'],
      [42, '50г'],
      [16, '3'],
      [1, '2 чайные ложки'],
      [4, '2 чайные ложки']
    ],
    description:
      '-- Выложите яичные желтки в миску, мелко натрите пармезан, приправьте перцем, затем хорошо перемешайте вилкой и отложите в сторону. Срежьте с панчетты жесткую кожицу и отложите в сторону, затем нарежьте мясо. Отварите спагетти в большой кастрюле с кипящей подсоленной водой до состояния аль денте.\п\п - Тем временем разотрите панчетту с кожурой, если она у вас есть, по всей поверхности сковороды среднего размера (это придаст ей фантастический вкус, или вместо этого добавьте 1 столовую ложку масла), затем поставьте на средне-сильный огонь. Очистите чеснок, затем раздавите его ладонью, добавьте в сковороду и оставьте на 1 минуту для придания аромата жиру. Добавьте панчетту, затем готовьте в течение 4 минут или пока она не начнет хрустеть. Достаньте чеснок из сковороды и выбросьте его, затем, оставив немного воды для варки, слейте и добавьте спагетти.\п\п - Хорошо перемешайте на огне, чтобы оно как следует впитало весь этот чудесный аромат, затем снимите сковороду с огня. Влейте немного воды для варки и хорошо перемешайте, приправьте перцем, затем влейте яичную смесь – на сковороде яйцо будет готовиться мягко, а не взбиваться в пену. Хорошо перемешайте, добавляя еще воды для варки, пока оно не станет однородным и блестящим. Подавайте, посыпав пармезаном и посыпав перцем.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Лазанья',
    photo_url: 'https://images8.alphacoders.com/817/817353.jpg',
    photosArray: [
      'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
      'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
      'https://images4.alphacoders.com/817/817350.jpg'
    ],
    time: 60,
    ingredients: [
      [36, '1 луковица'],
      [25, '1 кг'],
      [51, '5 головки'],
      [52, '1 кг'],
      [53, '1 кг'],
      [54, '1 банку консерв'],
      [23, '2-6 банки консерв'],
      [55, '2 Столовые ложки'],
      [56, '1/4 кружка'],
      [10, '1/2 кружка'],
      [1, '1/2 чайные ложки'],
      [58, '1 чайные ложки'],
      [4, '1/4 чайные ложки'],
      [16, '1 шт'],
      [46, '1 кг'],
      [48, '1 кружка'],
      [57, '30г']
    ],
    description:
      '-- Приготовьте лапшу в соответствии с инструкциями на упаковке; слейте воду. Тем временем в жаровне готовьте колбасу, говядину и лук на среднем огне 8-10 минут или пока мясо не перестанет быть розовым, измельчая его на мелкие кусочки. Добавьте чеснок; готовьте 1 минуту. Истощать. Добавьте помидоры, томатную пасту, воду, сахар, по 3 столовые ложки петрушки, базилика, фенхеля, 1/2 чайной ложки соли и перца; доведите до кипения. Уменьшите огонь и тушите, не накрывая, 30 минут, периодически помешивая. В небольшой миске смешайте яйцо, сыр рикотта, оставшуюся петрушку и соль. Разогрейте духовку до 375°. Выложите 2 стакана мясного соуса в несмазанную маслом форму для запекания размером 13х9 дюймов. Выложите 3 слоя лапши и треть смеси из рикотты. Посыпьте 1 стаканом сыра моцарелла и 2 столовыми ложками сыра пармезан.Повторите слои дважды. Сверху полейте оставшимся мясным соусом и сыром (блюдо получится объемным). Выпекайте, накрыв, 25 минут. Выпекайте, не накрывая, еще 25 минут или до образования пузырьков. Перед подачей дайте постоять 15 минут.'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Масло',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Соль',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Картофель (руссет)',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Паприка',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Черный перец',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Сельдерейная соль',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Сушеный шалфей',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Чесночный порошок',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Молотый душистый перец',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Сушеный орегано',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Сушеный базилик',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Сушеная майоран',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'Универсальная мука',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Коричневый сахар',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Кошерная соль',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Целая курица',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Яйца',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-кружка-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Нейтральное масло',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Вода',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Луковый порошок',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Куриная грудка',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Нарезанный лук',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Томатная паста',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Чили порошок',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Говяжий фарш',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Консервированные фасоль, промытые и осушенные',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Большие тортильи',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Фритос',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Тёртый чеддер',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Лайм',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Молотый кумин',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Кайенский перец',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Филе белой рыбы',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Авокадо',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Красный перец хлопья',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Лук',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Зеленый перец',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Красный перец',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Тесто для пиццы',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Кетчуп',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Острая соус',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Масло',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Сливки',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'Цельное молоко йогурт',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Сыр',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Моцарелла',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'Сельдерей',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Пармезан',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'Панчетта',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Спагетти',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Чеснок',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Лазанья лапши',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Итальянская колбаса',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Дробленые помидоры',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Сахар',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'Мелко нарезанная свежая петрушка',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'Рикотта',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: 'Семена фенхеля',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Банан',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Замороженная клубника',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Греческий йогурт',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
];