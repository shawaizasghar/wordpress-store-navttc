<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress-store-navttc' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'laragonrootpassword' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'S`]#N>f3xSyU,T>+#.Wuf%CD]gwFZ;z}e6%}e0cJWZ1 YjSe5mK`)kbIyvU`T  W' );
define( 'SECURE_AUTH_KEY',  'OU75bcZl3dlEg9AO[*Dy;#-d>8*kqCv={H}sqX3Us6#G7TNeUaj%}CLciS47}@a!' );
define( 'LOGGED_IN_KEY',    'of!(yr8TGu)@@w]d1|/%E6t$=VmrO.Yb2i /NiL!W&Y (,xC^?V}Z{wOT~(4Cc0_' );
define( 'NONCE_KEY',        '_p(+EBnIM8upOg$dy3D3LKZMw #ve ^X-jK~h.Mt~?wJnq((n; W1I5FeG<dpAp*' );
define( 'AUTH_SALT',        '4v#_yk?zK;1$U2K1`.I+}4^!wH&}9?s#d`dP(u^}{D6I6{d+A-nP3%; )??j&|Rq' );
define( 'SECURE_AUTH_SALT', 'JrxrV!%X+G[%|E?$ xP5WiIOrLO{9N)!3Iv+dk<i*PX>L6L3c*T<W &BvL#U(,3R' );
define( 'LOGGED_IN_SALT',   '3NWqt}KC?CbcM|=|2q}$Lq&FB<EK x`JOkBi`XA<}}^p[BqU]Q({cHzc2 A^rF{ ' );
define( 'NONCE_SALT',       '$Vzk<&,/A<M`C_3{Ye)Nnu&(#kiE[@vG>(wCf >&u|fnnKnlY{MDd}]bHXbC:G-,' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
