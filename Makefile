THELOUNGE_CONF_D=client/thelounge.conf.d
INPIRCD_CONF_D=server/inspircd.conf.d

up:
	sudo chown -R 10000 $(INPIRCD_CONF_D)
	docker compose up -d
	sudo cp ./server/motd $(INPIRCD_CONF_D)/docker.motd
	docker compose exec --user node -it client thelounge upgrade
	docker compose cp ./client/thelounge_patch/thelounge client:/usr/local/share/.config/yarn/global/node_modules/

down:
	docker compose down
	sudo chown -R $(USER) $(INPIRCD_CONF_D)

thelounge:
	docker compose exec --user node -it client thelounge $(command)

clear_logs:
	rm -vfr $(THELOUNGE_CONF_D)/logs

clear_uploads:
	rm -vfr $(THELOUNGE_CONF_D)/uploads

clear_users:
	rm -vfr $(THELOUNGE_CONF_D)/users

clear_client: clear_logs clear_uploads clear_users
	rm -fr $(THELOUNGE_CONF_D)/packages/node_modules
	rm -fr $(THELOUNGE_CONF_D)/packages/package_manager_cache
	rm -f $(THELOUNGE_CONF_D)/vapid.json

clear_server:
	rm -fv $(INPIRCD_CONF_D)/*
	touch $(INPIRCD_CONF_D)/.gitkeep

clear_all: clear_client clear_server