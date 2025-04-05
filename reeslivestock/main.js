import cattle from "./cattle.mjs";
import { cattleCard, buildCattleCards } from "./templates.mjs";

const featuredId = ['C4821', 'F8392', 'G6017'];

const featuredAnimals = cattle.filter(cow => featuredId.includes(cow.id));

buildCattleCards(featuredAnimals);

