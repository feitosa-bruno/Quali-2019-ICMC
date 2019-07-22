///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//  Dependencies
///////////////////////////////////////////////////////////////////////////////
// None


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//  Classes
///////////////////////////////////////////////////////////////////////////////

class PlotKey {
	constructor () {
		this.ring		= {};
		this.updated	= {};
	}

	initialize (reference) {
		for (var key in reference) {
			this.ring[key]		= reference[key];
			this.updated[key]	= false;
		}
	}

	update (referenceKey) {
		for (var key in referenceKey) {
			if (this.ring[key] !== referenceKey[key]) {
				this.ring[key]		= referenceKey[key];
				this.updated[key]	= true;
			} else {
				this.updated[key]	= false;
			}
		}
	}
}

module.exports = PlotKey;
