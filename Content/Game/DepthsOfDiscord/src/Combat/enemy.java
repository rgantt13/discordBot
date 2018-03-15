package Combat;

public class enemy implements combatUnit {
	private String name;
	private int maxHp;
	private int curHp;
	private int maxDef;
	private int curDef;
	private int maxAtt;
	private int curAtt;
	private String status;

	public enemy(String name, int maxHp, int curHp, int maxDef, int curDef,
			int maxAtt, int curAtt, String status) {
		super();
		this.name = name;
		this.maxHp = maxHp;
		this.curHp = curHp;
		this.maxDef = maxDef;
		this.curDef = curDef;
		this.maxAtt = maxAtt;
		this.curAtt = curAtt;
		this.status = status;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getMaxHp() {
		return maxHp;
	}

	public void setMaxHp(int maxHp) {
		this.maxHp = maxHp;
	}

	public int getCurHp() {
		return curHp;
	}

	public void setCurHp(int curHp) {
		this.curHp = curHp;
	}

	public int getMaxDef() {
		return maxDef;
	}

	public void setMaxDef(int maxDef) {
		this.maxDef = maxDef;
	}

	public int getCurDef() {
		return curDef;
	}

	public void setCurDef(int curDef) {
		this.curDef = curDef;
	}

	public int getMaxAtt() {
		return maxAtt;
	}

	public void setMaxAtt(int maxAtt) {
		this.maxAtt = maxAtt;
	}

	public int getCurAtt() {
		return curAtt;
	}

	public void setCurAtt(int curAtt) {
		this.curAtt = curAtt;
	}

	
	
	
	
	
	public void takeDamage(int dmg) {
		setCurHp(getCurHp() - dmg);
		
	}

	public int meleeAttack() {
		return getCurAtt();
		
	}

	public void incap() {
		if(getCurHp() <= 0){
			setStatus("INCAPACITATED");
		}
		
	}

	public void useItem() {
		// TODO Auto-generated method stub
		
	}

	public void heal(int hp) {
		setCurHp(getCurHp() + hp);
		
	}

	public String appearance() {
		// TODO Auto-generated method stub
		return "It looks spooky";
	}

}
