/* modopts.js */

/* $Id: modopts.js,v 1.2 2011/07/02 03:32:19 rswindell Exp $ */

/* Load Synchronet JS Module Control/Enable options from ctrl/modopts.ini */
/* Parse a single .ini section using the argument (to load) as the section name */
/* and return an object containing the key=value pairs as properties */


function get_mod_options(modname)
{
	var ini_file = new File(file_cfgname(system.ctrl_dir, "modopts.ini"));
	if(!ini_file.open("r")) {
		delete ini_file;
		return undefined;
	}

	var obj = ini_file.iniGetObject(modname);
	ini_file.close();
	delete ini_file;
	return obj;
}

get_mod_options(argv[0]);