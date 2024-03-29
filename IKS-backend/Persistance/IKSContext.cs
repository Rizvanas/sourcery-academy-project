﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using My_IKS.Data.Domain;
using My_IKS.Persistance.Configurations;

namespace My_IKS.Persistance
{
    public class IKSContext : IdentityDbContext<User, Role, int>
    {
        public IKSContext(DbContextOptions<IKSContext> options)
            : base(options)
        { }

        public virtual DbSet<Skill> Skills { get; set; }
        public virtual DbSet<Data.Domain.Goal> Goals { get; set; }
        public virtual DbSet<UserSkill> UserSkills { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new SkillConfiguration());
            modelBuilder.ApplyConfiguration(new GoalConfiguration());
            modelBuilder.ApplyConfiguration(new UserSkillConfiguration());
        }
    }
}
