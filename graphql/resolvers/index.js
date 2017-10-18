import { merge } from 'lodash';
import { resolver as mangaResolvers } from './manga';
// import { resolvers as authResolvers } from './user';
const rootResolvers = { };
// Merge all of the resolver objects together
// const resolvers = merge(rootResolvers, mangaResolvers, authResolvers);
const resolvers = merge(rootResolvers, mangaResolvers);

export default resolvers;
