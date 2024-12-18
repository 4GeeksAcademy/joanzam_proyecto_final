"""empty message

Revision ID: 1299581399e4
Revises: 8467de887691
Create Date: 2024-11-22 17:10:54.914663

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1299581399e4'
down_revision = '8467de887691'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('panales',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('marca', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('marca')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('panales')
    # ### end Alembic commands ###
