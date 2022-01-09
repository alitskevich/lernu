import app from './app.xml';

import combos from './combo/combos.xml';
import Item from './combo/Item.xml';
import Filters from './combo/Filters.xml';
import Header from './combo/Header.xml';
import Footer from './combo/Footer.xml';
import placeholders from './combo/placeholders.xml';

import Locations from './sections/Locations.xml';
import News from './sections/News.xml';
import Skills from './sections/Skills.xml';
import Catalog from './sections/Catalog.xml';

import { Store } from './store';

export default [app, Store, combos, Item, Filters, Header, Footer, placeholders, Locations, News, Skills, Catalog];
