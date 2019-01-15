const router = require('express').Router();

const albumRoutes = require('./album');
const announcementRoutes = require('./announcement');
const artistRoutes = require('./artist');
const authRoutes = require('./auth');
const trafficRoutes = require('./traffic');
const featureRoutes = require('./feature');
const giveawayRoutes = require('./giveaway');
const passwordRoutes = require('./password');
const searchRoutes = require('./search');
const showRoutes = require('./show');
const trackRoutes = require('./track');
const userRoutes = require('./user');
const venueRoutes = require('./venue');

router.use('/album', albumRoutes);
router.use('/announcement', announcementRoutes);
router.use('/artist', artistRoutes);
router.use('/auth', authRoutes);
router.use('/feature', featureRoutes);
router.use('/giveaway', giveawayRoutes);
router.use('/password', passwordRoutes);
router.use('/show', showRoutes);
router.use('/search', searchRoutes);
router.use('/track', trackRoutes);
router.use('/traffic', trafficRoutes);
router.use('/user', userRoutes);
router.use('/venue', venueRoutes);

module.exports = router;